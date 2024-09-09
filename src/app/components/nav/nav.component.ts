import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {PokedexService} from "../../utils/services/pokedex.service";

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{

  pokeSize?: number;

  constructor(private pokedexService: PokedexService) {}

  ngOnInit() {
    this.pokedexService.pokedexSize$.subscribe({
      next: (size) => this.pokeSize = size,
    })
  }

}
