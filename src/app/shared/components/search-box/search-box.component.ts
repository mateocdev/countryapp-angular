import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styles: ``,
})
export class SearchBoxComponent implements OnInit {
  private debouncer: Subject<string> = new Subject();
  private debouncerSubscription?: Subscription = new Subscription();
  @Input() placeholder!: string;

  @Output() onValue: EventEmitter<string> = new EventEmitter();
  @Output() public onDebounce: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
      .pipe(debounceTime(400))
      .subscribe((value) => {
        this.onDebounce.emit(value);
      });
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress(event: string): void {
    this.debouncer.next(event);
  }
}
