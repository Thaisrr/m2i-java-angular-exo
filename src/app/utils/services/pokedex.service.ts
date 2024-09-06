import { Injectable } from '@angular/core';
import {Pokemon} from "../types/pokemon.type";

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  pokedex: Pokemon[] = [];

  constructor() {
    const localPokedex = localStorage.getItem('pokedex');
    if(localPokedex) {
      this.pokedex = JSON.parse(localPokedex)
    }
  }

  add(pokemon: Pokemon) {
    if( !this.pokedex.some(p => p.name === pokemon.name)) {
      this.pokedex.push(pokemon);
      localStorage.setItem('pokedex', JSON.stringify(this.pokedex))
    } else {
      alert('Le Pokemon est déjà dans le pokedex');
    }
  }

  remove(pokemon: Pokemon) {
    const index = this.pokedex.findIndex(p => p.name === pokemon.name);
    if(index >= 0) {
      this.pokedex.splice(index, 1);
      localStorage.setItem('pokedex', JSON.stringify(this.pokedex))
    } else {
      alert(`Ce pokemon n'existe pas`)
    }
  }


}
