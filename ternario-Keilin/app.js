const contenedor = document.querySelector("#contenedor");
const cantidadPokemons = prompt("Ingrese la cantidad de pokemones a mostrar: ");
let colores = {
  normal: "#A8A77A",
  fighting: "#C22E28",
  flying: "#A98FF3",
  poison: "#A33EA1",
  ground: "#E2BF65",
  rock: "#B6A136",
  bug: "#A6B91A",
  ghost: "#735797",
  steel: "#B7B7CE",
  fire: "#EE8130",
  water: "#6390F0",
  grass: "#7AC74C",
  electric: "#F7D02C",
  psychic: "#F95587",
  ice: "#96D9D6",
  dragon: "#6F35FC",
  dark: "#705746",
  fairy: "#D685AD",
};
const obtenerPokemon = async () => {
  for (let i = 1; i <= cantidadPokemons; i++) {
    let aleatorio = Math.floor(Math.random() * (898 - 1) + 1);
    await traerPokemon(aleatorio);
  }
};
const traerPokemon = async (num) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${num}`;
  const respuesta = await fetch(url);
  const pokemons = await respuesta.json();
  contenidoPokemon(pokemons);
  console.log(pokemons);
};
const contenidoPokemon = (pokemons) => {
  let mostrarPokemon = "";
  mostrarPokemon = `<div class="tarjeta" style="${`background:linear-gradient(to right, ${
    colores[pokemons.types[0].type.name]
  }, ${
    pokemons.types[1]
      ? colores[pokemons.types[1].type.name]
      : colores[pokemons.types[0].type.name]
  })`}">
                      <img src="${pokemons.sprites.front_default}" alt="${
    pokemons.name
  }">
                      <p><b>Identificador: </b>${pokemons.id}</p>
                      <p><b>Nombre: </b>${
                        pokemons.name.charAt(0).toUpperCase() +
                        pokemons.name.slice(1)
                      }</p>
                      <p><b>Tipo: </b>${
                        pokemons.types[1]
                          ? `${
                              pokemons.types[0].type.name
                                .charAt(0)
                                .toUpperCase() +
                              pokemons.types[0].type.name.slice(1)
                            }, ${
                              pokemons.types[1]
                                ? pokemons.types[1].type.name
                                    .charAt(0)
                                    .toUpperCase() +
                                  pokemons.types[1].type.name.slice(1)
                                : ""
                            }`
                          : pokemons.types[0].type.name
                              .charAt(0)
                              .toUpperCase() +
                            pokemons.types[0].type.name.slice(1)
                      }</p>
                      <p><b>Habilidad: </b>${
                        pokemons.abilities[0].ability.name
                          .charAt(0)
                          .toUpperCase() +
                        pokemons.abilities[0].ability.name.slice(1)
                      }</p>
                      <p><b>
                      Especies: </b>${
                        pokemons.species.name.charAt(0).toUpperCase() +
                        pokemons.species.name.slice(1)
                      }</p>
                    </div>`;
  contenedor.innerHTML += mostrarPokemon;
};
obtenerPokemon();
