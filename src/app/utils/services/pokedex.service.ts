import { Injectable } from '@angular/core';
import {Pokemon} from "../types/pokemon.type";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  pokedex: Pokemon[] = [];
  pokedexSize$ = new BehaviorSubject<number>(0)

  constructor() {
    const localPokedex = localStorage.getItem('pokedex');
    if(localPokedex) {
      this.pokedex = JSON.parse(localPokedex);
      this.pokedexSize$.next(this.pokedex.length)
    }
  }

  add(pokemon: Pokemon) {
    if( !this.pokedex.some(p => p.name === pokemon.name)) {
      this.pokedex.push(pokemon);
      localStorage.setItem('pokedex', JSON.stringify(this.pokedex))
      this.pokedexSize$.next(this.pokedex.length)
    } else {
      alert('Le Pokemon est déjà dans le pokedex');
    }
  }

  remove(pokemon: Pokemon) {
    const index = this.pokedex.findIndex(p => p.name === pokemon.name);
    if(index >= 0) {
      this.pokedex.splice(index, 1);
      localStorage.setItem('pokedex', JSON.stringify(this.pokedex))
      this.pokedexSize$.next(this.pokedex.length)
    } else {
      alert(`Ce pokemon n'existe pas`)
    }
  }


}
