const { pokemon, pokemonId } = require("../services/pokemonServ");

jest.mock("../__mocks__/pokemonServ");

//! Using API To Test
describe("Pokemon Test", () => {
    test("Return 20 pokemon", async () => {
        const result = await pokemon();

        expect(result.data.results).toHaveLength(20);
    });

    //! Not working as expected
    test("Return By ID", async () => {
        const result = await pokemonId("1");

        expect(result.data.name).toBe("bulbasaur");
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

//         expect(results.data.name).toEqual("bulbasaur");

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
