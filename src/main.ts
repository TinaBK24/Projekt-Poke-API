import './style.css'

import { IPokemon, IResults } from './interfaces/IPokemon';
import { IType } from './interfaces/IPokemonInfo';


const BASE_URL = "https://pokeapi.co";

const pokemonInput = document.getElementById('pokemonInput') as HTMLInputElement;
const btn = document.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
const pokemonList = document.getElementById('pokemonList') as HTMLDivElement;

function createPokemons(pokemon: IResults){
  const pokemonContainer = document.createElement('div') as HTMLDivElement;

  pokemonContainer.innerHTML = `
    <img src="" alt="${pokemon.name}">
    <div>
      
    </div>
    <p>
      ${pokemon.name}
    </p>
  `

  pokemonList.appendChild(pokemonContainer)
}


const fetchAllPokemons = async () => {
  let pokemonsURL = `${BASE_URL}/api/v2/pokemon`;
  pokemonList.innerHTML = "";
  const response = await fetch(pokemonsURL);
  const data: IPokemon = await response.json();
  console.log(data.results);
  data.results.forEach((pokemon: IResults) => {
    createPokemons(pokemon)
  })
}
fetchAllPokemons()