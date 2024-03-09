import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { Region } from '../../interfaces/region.type';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``,
})
export class ByRegionPageComponent implements OnInit {
  constructor(private countriesService: CountriesService) {}
  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.data;
    this.initialValue = this.countriesService.cacheStore.byRegion.term;
  }

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
  public initialValue: Region = '';

  searchByRegion(query: Region): void {
    this.isLoading = true;
    this.activeRegion = query;
    this.initialValue = '';
    this.countriesService.searchRegion(query).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    });
  }
}
