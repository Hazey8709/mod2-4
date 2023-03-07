const express = require("express");
const pokemonRouter = express.Router();
const { pokemon, pokemonId } = require("../services/pokemonServ");

//! GET-ALL ()
//* http://www.localhost:4000/
pokemonRouter.get("/", (req, res, next) => {
    pokemon()
        .then((result) => {
            res.status(500).json(result.data);
        })
        .catch((err) => {
            res.status(500).json({
                error: {
                    message: err.message,
                },
            });
        });
});

//! GET-ID
//* http://www.localhost:4000/:id
pokemonRouter.get("/:id", (req, res, next) => {
    pokemonId(req.params.id)
        .then((result) => {
            res.status(200).json(result.data);
        })
        .catch((err) => {
            res.status(500).json({
                error: {
                    message: err.message,
                },
            });
        });
});

module.exports = pokemonRouter;
