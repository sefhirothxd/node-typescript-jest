import { getPokemonById } from '../../src/js-foundation/06-promises';

describe('Promises 06-promises.ts', () => {
	test('getPokemonById', async () => {
		const pokemonId = 1;
		const pokemon = await getPokemonById(pokemonId);

		expect(pokemon).toBe('bulbasaur');
	});

	test('should return an error if pokemon does exist', async () => {
		const pokemonId = 0;
		try {
			await getPokemonById(pokemonId);
			expect(true).toBeFalsy();
		} catch (error) {
			expect(error).toBe(`Pokemon not found with id ${pokemonId}`);
		}
	});
});
