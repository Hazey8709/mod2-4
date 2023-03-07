const axios = require("axios");

require("dotenv").config();

const pokemon = async () => {
    console.log("GET-All");
    return await axios.get(`${process.env.pokeURL}`);
};

const pokemonId = async (id) => {
    console.log("GET-ID");
    return await axios.get(`${process.env.pokeURL}${id}`);
};

module.exports = {
    pokemon,
    pokemonId,
};
