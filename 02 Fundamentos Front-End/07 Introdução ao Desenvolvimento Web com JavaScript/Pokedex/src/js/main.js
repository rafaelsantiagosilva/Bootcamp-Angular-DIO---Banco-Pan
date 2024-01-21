"use strict";

// const OFFSET = 0;
// const LIMIT = 151;
let pokemonId = 1;
const POKEAPI_URL = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

fetch(POKEAPI_URL) // Por padrão, usa o GET
     .then((response) => response.json())
     .then((response) => console.log(response)) // Recebe o return do then anterior
     .catch((error) => console.log(error));
