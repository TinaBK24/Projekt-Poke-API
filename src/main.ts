import './style.css'

import { IPokemon, IResults } from './interfaces/IPokemon';
import { IPokemonInfo, IType } from './interfaces/IPokemonInfo';
import { ITypesInfo } from './interfaces/ITypesInfo';


const BASE_URL = "https://pokeapi.co";

const pokemonInput = document.getElementById('pokemonInput') as HTMLInputElement;
const pokemonList = document.getElementById('pokemonList') as HTMLDivElement;

function createPokemons(pokemon: IResults, pokemonId: number, pokemonTypes: string[]){
  const pokemonContainer = document.createElement('div') as HTMLDivElement;

  const typeBtn = pokemonTypes.map(type => `<button class="type-btn ${type}" type="button">${type}</button>`).join("")

  pokemonContainer.innerHTML = `
    <img src="" alt="${pokemon.name}">
    <div>
      ${typeBtn}
    </div>
    <p>
      #${String(pokemonId).padStart(3, "0")} ${pokemon.name}
    </p>
  `

  pokemonList.appendChild(pokemonContainer);

  const buttons = document.querySelectorAll('.type-btn') as NodeListOf<HTMLButtonElement>;
  buttons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const typeName = btn.textContent?.trim().toLowerCase();
      
      if(typeName){
        const typeId = await fetchTypeIdByName(typeName)
        console.log(`${BASE_URL}/api/v2/type/${typeId}`);
        
      } else {
        console.error("Error");
        
      }
    })
  })
}


const fetchPokemonInfo = async (pokemon: IResults) => {
  const response = await fetch(pokemon.url);
  const data: IPokemonInfo = await response.json();

  const types = data.types.map((typeInfo: IType) => typeInfo.type.name)
  return {pokemonsId: data.id, types}
}


const fetchAllPokemons = async () => {
  let pokemonsURL = `${BASE_URL}/api/v2/pokemon`;
  pokemonList.innerHTML = "";
  const response = await fetch(pokemonsURL);
  const data: IPokemon = await response.json();

  for (const pokemon of data.results){
    const {pokemonsId, types} = await fetchPokemonInfo(pokemon);
    createPokemons(pokemon, pokemonsId, types)
  }
}
fetchAllPokemons()


const fetchTypesInfo = async (type: IResults) => {
  const response = await fetch(type.url);
  const data: ITypesInfo = await response.json();

  return data.id
}


const fetchTypeIdByName = async (typeName: string): Promise<number | undefined> => {
  let typesURL = `${BASE_URL}/api/v2/type`;
  const response = await fetch(typesURL);
  const data: IPokemon = await response.json();

  const type = data.results.find((t: IResults) => t.name === typeName);

  if(type){
    const typeId = await fetchTypesInfo(type);
    return typeId
  }
}



