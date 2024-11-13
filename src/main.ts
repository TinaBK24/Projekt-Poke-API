import './style.css'

import { IResults } from './interfaces/IPokemon';
import { IType } from './interfaces/IPokemonInfo';


const BASE_URL = "https://pokeapi.co";

const pokemonInput = document.getElementById('pokemonInput') as HTMLInputElement;
const btn = document.querySelectorAll('button') as NodeListOf<HTMLButtonElement>;
const pokemonList = document.getElementById('pokemonList') as HTMLDivElement;

function createPokemons(pokemon: IResults){
  const newsPokemon = document.createElement('div') as HTMLDivElement;

  newsPokemon.innerHTML = `
    <img src="" alt="${pokemon.name}">
    <div>
      
    </div>
    <p>
      ${pokemon.name}
    </p>
  `

  pokemonList.appendChild(newsPokemon)
}


