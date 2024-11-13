import './style.css'

import { IPokemon, IResults } from './interfaces/IPokemon';
import { IPokemonInfo, IType } from './interfaces/IPokemonInfo';


const BASE_URL = "https://pokeapi.co";

const allPokemonShow = document.querySelector('a') as HTMLAnchorElement;
const pokemonInput = document.getElementById('pokemonInput') as HTMLInputElement;
const pokemonList = document.getElementById('pokemonList') as HTMLDivElement;


let allPokemons: { pokemon: IResults; id: number; types: string[], image: string }[] = [];

function createPokemons(pokemon: IResults, pokemonId: number, pokemonTypes: string[], pokemonImg: string){
  const pokemonContainer = document.createElement('div') as HTMLDivElement;

  const typeBtn = pokemonTypes.map(type => `<button class="type-btn ${type}" type="button">${type}</button>`).join("")

  pokemonContainer.innerHTML = `
    <img src="${pokemonImg}" alt="${pokemon.name}">
    <div>
      ${typeBtn}
    </div>
    <p>
      #${String(pokemonId).padStart(3, "0")} ${pokemon.name}
    </p>
  `

  pokemonList.appendChild(pokemonContainer);
}


const fetchPokemonInfo = async (pokemon: IResults) => {
  const response = await fetch(pokemon.url);
  const data: IPokemonInfo = await response.json();

  const types = data.types.map((typeInfo: IType) => typeInfo.type.name)
  const image = data.sprites.front_shiny;
  const pokemonsId = data.id;
  return {pokemonsId, types, image}
}


const fetchAllPokemons = async () => {
  let pokemonsURL = `${BASE_URL}/api/v2/pokemon?limit=100`;
  pokemonList.innerHTML = "";
  const response = await fetch(pokemonsURL);
  const data: IPokemon = await response.json();

  for (const pokemon of data.results){
    const {pokemonsId, types, image} = await fetchPokemonInfo(pokemon);
    allPokemons.push({ pokemon, id: pokemonsId, types, image });
    createPokemons(pokemon, pokemonsId, types, image)
  }
}
fetchAllPokemons()


allPokemonShow.addEventListener('click', () => {
  fetchAllPokemons();
});


let currentFilter = "";


function filterByName(pokemonName: string){
  pokemonList.innerHTML = "";
  const filteredPokemons = allPokemons.filter(name => name.pokemon.name.includes(pokemonName));
  filteredPokemons.forEach(({ pokemon, id, types, image }) => createPokemons(pokemon, id, types, image));
  currentFilter = pokemonName;
}


pokemonInput?.addEventListener('input', () => {
  const pokemonValue = pokemonInput.value.trim().toLowerCase();
  
  if (pokemonValue) {
    filterByName(pokemonValue);
  } else {
    console.error("Error retrieving name");
  }
})


function filterByType(typeName: string) {
  pokemonList.innerHTML = "";
  const filteredPokemons = allPokemons.filter(pokemon => pokemon.types.includes(typeName));
  filteredPokemons.forEach(({ pokemon, id, types, image }) => createPokemons(pokemon, id, types, image));
  currentFilter = typeName;
}


document.querySelector('.type-btns')?.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;
  if (target && target.matches('.type-btn')) {
    const typeName = target.textContent?.trim().toLowerCase();
    if (typeName) {
      filterByType(typeName);
    } else {
      console.error("Error retrieving type name");
    }
  }
});


pokemonList.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;
  if (target && target.matches('.type-btn')) {
    const typeName = target.textContent?.trim().toLowerCase();
    if (typeName) {
      filterByType(typeName);
    } else {
      console.error("Error retrieving type name");
    }
  }
});