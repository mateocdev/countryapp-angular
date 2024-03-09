import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { CacheSore } from '../interfaces/cache-store.interface';
import { Country } from '../interfaces/country.interface';
import { Region } from '../interfaces/region.type';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  public cacheStore: CacheSore = {
    byCapital: { term: '', data: [] },
    byCountry: { term: '', data: [] },
    byRegion: { term: '', data: [] },
  };

  constructor(private httpClient: HttpClient) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem('cache', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage() {
    if (!localStorage.getItem('cache')) return;
    const cache = localStorage.getItem('cache');
    this.cacheStore = JSON.parse(cache || '{}');
  }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(url).pipe(catchError(() => of([])));
  }
  searchCapital(query: string): Observable<Country[]> {
    return this.getCountriesRequest(`${this.apiUrl}/capital/${query}`).pipe(
      tap(
        (countries) =>
          (this.cacheStore.byCapital = { term: query, data: countries })
      ),
      tap(() => this.saveToLocalStorage())
    );
  }
  searchCountry(query: string): Observable<Country[]> {
    return this.getCountriesRequest(`${this.apiUrl}/name/${query}`).pipe(
      tap(
        (countries) =>
          (this.cacheStore.byCountry = { term: query, data: countries })
      ),
      tap(() => this.saveToLocalStorage())
    );
  }
  searchRegion(query: Region): Observable<Country[]> {
    return this.getCountriesRequest(`${this.apiUrl}/region/${query}`).pipe(
      tap(
        (countries) =>
          (this.cacheStore.byRegion = { term: query, data: countries })
      ),
      tap(() => this.saveToLocalStorage())
    );
  }
  searchCountryByAlphaCode(query: string): Observable<Country[]> {
    return this.httpClient.get<Country[]>(`${this.apiUrl}/alpha/${query}`).pipe(
      map((countries) => (countries.length > 0 ? [countries[0]] : [])),
      catchError(() => of([]))
    );
  }
}
