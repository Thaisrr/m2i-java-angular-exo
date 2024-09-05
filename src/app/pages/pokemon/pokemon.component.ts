

import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {FormArray, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Pokemon} from "../../utils/types/pokemon.type";

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ReactiveFormsModule
  ],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {

  pokeForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
    zone: new FormGroup({
      name: new FormControl(''),
      description: new FormControl('')
    }),
    types: new FormControl([]),
    attacks: new FormArray([
      new FormGroup({
        name: new FormControl(''),
        power: new FormControl(0),
      })
    ])
  });

  types = [
    'poison',
    'feu',
    'psy',
    'eau',
    'sol',
    'vol',
    'fée',
    'dragon',
    'roche'
  ];

  pokemons : Pokemon[] = [];

  constructor() {
    const stored = localStorage.getItem('pokemons');
    if(stored) {
      this.pokemons = JSON.parse(stored)
    }
  }

  get attacks() {
    return this.pokeForm.controls.attacks;
  }

  addAttack() {
    this.attacks.push(new FormGroup({
      name: new FormControl(''),
      power: new FormControl(0),
    }))
  }

  onSubmit() {
    console.log('Pokemon enregistré', this.pokeForm.value);
    this.pokemons.push(this.pokeForm.value as Pokemon);
    localStorage.setItem('pokemons', JSON.stringify(this.pokemons));
    this.pokeForm.reset();
  }

}
