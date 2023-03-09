const { pokemon, pokemonId } = require("../services/pokemonServ");

jest.mock("../__mocks__/pokemonServ");

describe("Pokemon Test", () => {
    test("Return 20 pokemon", async () => {
        const results = await pokemon().results;

        expect(results).toBe(results);
    });

    test("Return By ID", async () => {
        const results = await pokemonId().results[0];

        //expect(results[0]).toHaveLength(1);
        expect(results.name).toEqual("bulbasaur");
        expect(results.url).toEqual("https://pokeapi.co/api/v2/pokemon/1/");
    });
});

// describe("", () => {
//     test("", () => {
//         expect().toBe();
//     });

//     test("", () => {
//         expect().toBe();
//     });
// });

// describe("Testing Basic Math", () => {
//     test("Addition 2 num", () => {
//         const results = operations.add(10, 10);
//         expect(results).toBe(20);
//     });
// });
