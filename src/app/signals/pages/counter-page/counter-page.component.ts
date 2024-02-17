import { Component, computed, signal } from '@angular/core';

const name = signal('Javier'); // funciona fuera de la clase también

@Component({
  selector: 'app-counter-page',
  templateUrl: './counter-page.component.html',
  styleUrl: './counter-page.component.css',
})
export class CounterPageComponent {
  public counter = signal(10);
  public squareCounter = computed(() => this.counter() * this.counter()); // solo lectura

  constructor() {
    console.log(name());
  }

  increaseBy(value: number) {
    this.counter.update((current) => current + value);
  }
}
