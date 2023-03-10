const axios = require("axios");

require("dotenv").config();

const pokemon = async () => {
    console.log("GET-All");
    return await axios.get(`${process.env.pokeURL}`);
};

const pokemonId = async (pokeId) => {
    console.log("GET-ID");
    return await axios.get(`${process.env.pokeURL}${pokeId}`);
};

module.exports = {
    pokemon,
    pokemonId,
};
