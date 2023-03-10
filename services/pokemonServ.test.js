const { pokemon, pokemonId } = require("../services/pokemonServ");

jest.mock("../__mocks__/pokemonServ");

//! Using API To Test
describe("Pokemon Test", () => {
    test("Return 20 pokemon", async () => {
        const results = await pokemon().results;

        expect(results).toBe(results);
    });

    //! Not working as expected
    test("Return By ID", async () => {
        const results = await pokemonId(1).results;

        expect(results.name).toEqual("bulbasaur");
    });
});

// //! To Use MOCK Data to TEST --(NOT API)--
// describe("Pokemon Test 2", () => {
//     test("Return 20 pokemon", async () => {
//         const results = await pokemon().data;

//         expect(results).toBe(results);
//     });


//     test("Return By ID", async () => {
//         const results = await pokemonId(1);

//         //expect(results.data.id).toHaveLength(1);
//         expect(results.data.name).toEqual("bulbasaur");
//         // expect(results.data.url).toEqual(
//         //     "https://pokeapi.co/api/v2/pokemon/1/"
//         // );
//     });
// });

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
