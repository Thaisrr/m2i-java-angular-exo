import {Component, OnInit} from '@angular/core';
import {FactsService} from "../../utils/services/facts.service";
import {Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-chuck-norris',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './chuck-norris.component.html',
  styleUrl: './chuck-norris.component.css'
})
export class ChuckNorrisComponent implements OnInit{
  joke$?: Observable<string>
  constructor(private factsService: FactsService) {}

  ngOnInit() {
    this.getFact()
  }

  getFact() {
    this.joke$ = this.factsService.getRandomFact()
  }

}
