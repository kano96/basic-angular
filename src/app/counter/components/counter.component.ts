import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div class="counter">
      <p>{{ count }}</p>
      <button (click)="decrement()">-1</button>
      <button (click)="reset()">Reset</button>
      <button (click)="increment()">+1</button>
    </div>
  `,
})
export class CounterComponent {
  constructor() {}

  public count = 0;

  decrement() {
    this.count--;
  }

  increment() {
    this.count++;
  }

  reset() {
    this.count = 0;
  }
}
