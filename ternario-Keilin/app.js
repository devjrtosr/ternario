const contenedor = document.querySelector("#contenedor");

const traerPokemon = async () => {
  const url = "https://pokeapi.co/api/v2/pokemon/1";
  const respuesta = await fetch(url);
  const pokemons = await respuesta.json();
  console.log(pokemons);
};
traerPokemon();
