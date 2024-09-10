import { Routes } from '@angular/router';
import {CounterComponent} from "./pages/counter/counter.component";
import {SeriesComponent} from "./pages/series/series.component";
import {LibraryComponent} from "./pages/library/library.component";
import {PokemonComponent} from "./pages/pokemon/pokemon.component";
import {PokedexComponent} from "./pages/pokedex/pokedex.component";
import {ChuckNorrisComponent} from "./pages/chuck-norris/chuck-norris.component";

export const routes: Routes = [
  {path: 'counter', component: CounterComponent},
  {path: 'series', component: SeriesComponent},
  {path: 'library', component: LibraryComponent},
  {path: 'pokemon', component: PokemonComponent},
  {path: 'pokedex', component: PokedexComponent},
  {path: 'chuck-norris', component: ChuckNorrisComponent},
];
