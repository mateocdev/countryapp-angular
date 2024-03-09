import { Country } from './country.interface';
import { Region } from './region.type';

export interface CacheSore {
  byCapital: TermCountries;
  byCountry: TermCountries;
  byRegion: RegionCountries;
}
export interface TermCountries {
  term: string;
  data: Country[];
}

export interface RegionCountries {
  term: Region;
  data: Country[];
}
