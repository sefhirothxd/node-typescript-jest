import { getId } from '../../src/plugins/get-id.plugin';

describe('get-id.plugin.ts', () => {
	test('GetID should return a UID', () => {
		const uuid = getId();

		expect(typeof uuid).toBe('string');
		expect(uuid.length).toBe(36);
	});
});
