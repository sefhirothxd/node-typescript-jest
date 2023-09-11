import { getAge } from '../../src/plugins/get-age.plugin';

describe('get-age.plugin.ts', () => {
	test('getAge should return the age of a person', () => {
		const birthdate = '1989-03-28';
		const age = getAge(birthdate);

		expect(typeof age).toBe('number');
	});

	test('getAge should return current age', () => {
		const birthdate = '1989-03-28';
		const age = getAge(birthdate);

		const calculateAge =
			new Date().getFullYear() - new Date(birthdate).getFullYear();
		expect(age).toBe(calculateAge);
	});

	test('getAge should return 0 yers', () => {
		const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1989);
		const birthdate = '1989-03-28';
		const age = getAge(birthdate);

		console.log({ age });
	});
});
