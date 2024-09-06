import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Pokemon} from "../../utils/types/pokemon.type";
import {PokedexService} from "../../utils/services/pokedex.service";

@Component({
  selector: 'app-pokemon-card[pokemon]',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-card.component.html',
  styleUrl: './pokemon-card.component.css'
})
export class PokemonCardComponent {

  @Input() pokemon!: Pokemon;
  @Output() deleteEvent = new EventEmitter<Pokemon>();
  @Input() view: 'global' | 'pokedex' = "global";

  constructor(private pokedexService: PokedexService) {}

  deletePokemon() {
    this.deleteEvent.emit(this.pokemon);
  }

  addToPokedex() {
    this.pokedexService.add(this.pokemon);
  }

  deleteFromPokedex() {
    this.pokedexService.remove(this.pokemon);
  }

}
