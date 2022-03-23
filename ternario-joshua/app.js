const contenedor = document.querySelector("#contenedor");
const cantidadPokemones = Number.parseInt(
  prompt("Digite la cantidad de pokemones")
);
let colores = [];

const listarPokemones = async () => {
  for (let i = 0; i < cantidadPokemones; i++) {
    const numeroRandom = Math.floor(Math.random() * (898 - 1) + 1);
    await getPokemon("https://pokeapi.co/api/v2/pokemon/" + numeroRandom);
  }
};

const getPokemon = async (enlace) => {
  const respuesta = await fetch(enlace);
  const pokemon = await respuesta.json();

  fondoPokemon(pokemon.types);
  colores = pintarDiv(colores);
  console.log(pokemon.abilities[0].ability.name);

  let html = `
  <div style="${`background:linear-gradient(to right, ${colores[0]},${
    colores[1] ? colores[1] : "#dee2e6"
  })`}" class="tarjeta">
    <img src="${pokemon.sprites.front_default}" alt="Pokemon ${pokemon.name}"/>
    <p class="nombre texto">${pokemon.name}</p>
    <p class="texto">#Pokedex: ${pokemon.id}</p>
    <p class="texto">Abilidad: ${pokemon.abilities[0].ability.name}</p>
  </div>
  `;

  contenedor.innerHTML += html;

  colores = [];
};

const fondoPokemon = (tipos) => {
  tipos.map((tipo) => {
    colores.push(tipo.type.name);
  });
};

const pintarDiv = (colores) => {
  let nuevosColores = [];
  colores.map((color) => {
    switch (color) {
      case "grass":
        nuevosColores.push("#38b000");
        break;
      case "normal":
        nuevosColores.push("#f2e8cf");
        break;
      case "dragon":
        nuevosColores.push("#9191ab");
        break;
      case "fire":
        nuevosColores.push("#f39300");
        break;
      case "water":
        nuevosColores.push("#09769a");
        break;
      case "fighting":
        nuevosColores.push("#bc4749");
        break;
      case "flying":
        nuevosColores.push("#84cae7");
        break;
      case "poison":
        nuevosColores.push("#7f7caf");
        break;
      case "electric":
        nuevosColores.push("#f8ff1f");
        break;
      case "ground":
        nuevosColores.push("#8a6e54");
        break;
      case "psychic":
        nuevosColores.push("#edb0b8");
        break;
      case "rock":
        nuevosColores.push("#8b635c");
        break;
      case "ice":
        nuevosColores.push("#5bc6ee");
        break;
      case "bug":
        nuevosColores.push("#90a955");
        break;
      case "ghost":
        nuevosColores.push("#a899ff");
        break;
      case "dark":
        nuevosColores.push("#212738");
        break;
      case "steel":
        nuevosColores.push("#a0a294");
        break;
      case "fairy":
        nuevosColores.push("#ff6aff");
        break;
    }
  });

  return nuevosColores;
};

listarPokemones();
