import './style.css'

import { IPokemon, IResults } from './interfaces/IPokemon';
import { IPokemonInfo, IType } from './interfaces/IPokemonInfo';


const BASE_URL = "https://pokeapi.co";

const pokemonInput = document.getElementById('pokemonInput') as HTMLInputElement;
const btn = document.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
const pokemonList = document.getElementById('pokemonList') as HTMLDivElement;

function createPokemons(pokemon: IResults, pokemonId: number, pokemonTypes: string[]){
  const pokemonContainer = document.createElement('div') as HTMLDivElement;

  const typeBtn = pokemonTypes.map(type => `<button>${type}</button>`).join("")

  pokemonContainer.innerHTML = `
    <img src="" alt="${pokemon.name}">
    <div>
      ${typeBtn}
    </div>
    <p>
      #${String(pokemonId).padStart(3, "0")} ${pokemon.name}
    </p>
  `

  pokemonList.appendChild(pokemonContainer)
}


const fetchPokemonInfo = async (pokemon: IResults) => {
  const response = await fetch(pokemon.url);
  const data: IPokemonInfo = await response.json();

  const types = data.types.map((typeInfo: IType) => typeInfo.type.name)
  return {id: data.id, types}
}


const fetchAllPokemons = async () => {
  let pokemonsURL = `${BASE_URL}/api/v2/pokemon`;
  pokemonList.innerHTML = "";
  const response = await fetch(pokemonsURL);
  const data: IPokemon = await response.json();
  console.log(data.results);

  for (const pokemon of data.results){
    const {id, types} = await fetchPokemonInfo(pokemon);
    createPokemons(pokemon, id, types)
  }
}
fetchAllPokemons()