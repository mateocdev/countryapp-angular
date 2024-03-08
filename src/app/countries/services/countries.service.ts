import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';
  constructor(private httpClient: HttpClient) {}

  searchCapital(query: string): Observable<Country[]> {
    return this.httpClient
      .get<Country[]>(`${this.apiUrl}/capital/${query}`)
      .pipe(catchError(() => of([])));
  }
  searchCountry(query: string): Observable<Country[]> {
    return this.httpClient
      .get<Country[]>(`${this.apiUrl}/name/${query}`)
      .pipe(catchError(() => of([])));
  }
  searchRegion(query: string): Observable<Country[]> {
    return this.httpClient
      .get<Country[]>(`${this.apiUrl}/region/${query}`)
      .pipe(catchError(() => of([])));
  }
  searchCountryByAlphaCode(query: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.apiUrl}/alpha/${query}`).pipe(
      map((countries) => (countries.length > 0 ? [countries[0]] : [])),
      catchError(() => of([]))
    );
  }
}
