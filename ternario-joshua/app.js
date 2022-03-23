const getPokemon = async (enlace) => {
  const respuesta = await fetch(enlace);
  const pokemon = await respuesta.json();
  console.log(pokemon);
};

getPokemon("https://pokeapi.co/api/v2/pokemon/1");
