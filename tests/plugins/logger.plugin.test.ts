import {
	buildLogger,
	logger as winstonLogger,
} from '../../src/plugins/logger.plugin';

describe('logger.plugin', () => {
	test('buildlogger should return a function logger', () => {
		const logger = buildLogger('test');

		expect(typeof logger.log).toBe('function');
		expect(typeof logger.error).toBe('function');
	});

	test('logger.log should return a function logger', () => {
		const winstonLoggerMock = jest.spyOn(winstonLogger, 'log');
		const message = 'test message';
		const service = 'test service';
		const logger = buildLogger(service);
		logger.log(message);

		expect(winstonLoggerMock).toHaveBeenCalledWith(
			'info',
			expect.objectContaining({
				message,
				service,
			})
		);
	});
});
