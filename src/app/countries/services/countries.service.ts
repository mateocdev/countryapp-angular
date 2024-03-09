import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private httpClient: HttpClient) {}

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(url).pipe(catchError(() => of([])));
  }
  searchCapital(query: string): Observable<Country[]> {
    return this.getCountriesRequest(`${this.apiUrl}/capital/${query}`);
  }
  searchCountry(query: string): Observable<Country[]> {
    return this.getCountriesRequest(`${this.apiUrl}/name/${query}`);
  }
  searchRegion(query: string): Observable<Country[]> {
    return this.getCountriesRequest(`${this.apiUrl}/region/${query}`);
  }
  searchCountryByAlphaCode(query: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.apiUrl}/alpha/${query}`).pipe(
      map((countries) => (countries.length > 0 ? [countries[0]] : [])),
      catchError(() => of([]))
    );
  }
}
