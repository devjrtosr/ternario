const realizarPeticion = async () => {
  const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/1");
  const data = await respuesta.json();
  console.log(data);
};

realizarPeticion();
