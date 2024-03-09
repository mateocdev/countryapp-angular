import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent {
  constructor(private countriesService: CountriesService) {}

  public countries: Country[] = [];
  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  public isLoading: boolean = false;
  public activeRegion?: Region;

  searchByRegion(query: Region): void {
    this.isLoading = true;
    this.activeRegion = query;
    this.countriesService.searchRegion(query).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
