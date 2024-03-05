import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styles: ``,
})
export class SearchBoxComponent {
  @Input() placeholder!: string;

  @Output() onValue: EventEmitter<string> = new EventEmitter();

  emitValue(value: string): void {
    this.onValue.emit(value);
  }
}
