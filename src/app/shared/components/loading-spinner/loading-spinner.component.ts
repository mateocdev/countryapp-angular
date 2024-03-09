import { Component } from '@angular/core';

@Component({
  selector: 'app-loading-spinner',
  templateUrl: './loading-spinner.component.html',
  styles: `.spinner-container{
    align-items: center;
    background-color: black;
    border-radius: 30px;
    bottom: 15px;
    box-shadow: 0 3px rgba(0, 0, 0, 0.2);
    color: white;
    display: flex;
    display: flex;
    position: fixed;
    right: 15px;
  } span{ margin-left: 1em}`,
})
export class LoadingSpinnerComponent {}
