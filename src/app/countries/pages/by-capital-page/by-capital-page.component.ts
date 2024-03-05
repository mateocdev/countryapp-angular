import { Component } from '@angular/core';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``,
})
export class ByCapitalPageComponent {
  searchByCapital(term: any) {
    console.log(term);
  }
}
