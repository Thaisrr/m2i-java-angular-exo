import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../../utils/types/pokemon.type";
import {PokedexService} from "../../utils/services/pokedex.service";
import {PokemonCardComponent} from "../../components/pokemon-card/pokemon-card.component";

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [
    PokemonCardComponent
  ],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent implements OnInit{

  pokedex: Pokemon[] = [];

  constructor(private pokedexService: PokedexService) {}

  ngOnInit() {
    this.pokedex = this.pokedexService.pokedex;
  }


}
