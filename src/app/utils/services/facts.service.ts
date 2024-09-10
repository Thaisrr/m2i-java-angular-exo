import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FactsService {

  apiUrl = 'https://api.chucknorris.io/jokes/random';

  constructor(private http: HttpClient) { }

  getRandomFact(): Observable<string> {
    return this.http.get<{value: string}>(this.apiUrl).pipe(
      map(response => response.value),
      catchError(error => {
        alert(error.message);
        return of('')
      })
    )
  }
}
