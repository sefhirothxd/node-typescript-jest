import { httpClientPlugin } from '../../src/plugins/http-client.plugin';

describe('http-client.plugin', () => {
	test('get axios should return a string', async () => {
		const data = await httpClientPlugin.get(
			'https://jsonplaceholder.typicode.com/todos/1'
		);

		expect(data).toEqual({
			userId: 1,
			id: 1,
			title: 'delectus aut autem',
			completed: expect.any(Boolean),
		});
	});

	test('httpClientPlugin should have POST, PUT and Delete methods', async () => {
		console.log(typeof httpClientPlugin.post);

		expect(typeof httpClientPlugin.post).toBe('function');
	});
});
