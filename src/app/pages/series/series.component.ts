import { Component } from '@angular/core';
import {SortPipe} from "../../utils/pipes/sort.pipe";

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [
    SortPipe
  ],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {
  series = [
    'Stranger Things',
    'Poupées Russes',
    'Arcane'
  ];

  order: 'asc' | 'desc' = 'asc';

  removeSerie(index: number) {
    this.series.splice(index, 1);
  }

  setOrder(order:'asc' | 'desc' ) {
    this.order = order;
  }

}
