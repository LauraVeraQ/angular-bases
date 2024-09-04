import { Component } from '@angular/core';
// @component tranforma mi clase a componente.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Hola mundo';
  public counter: number = 23;

  increaseBy(value: number): void {
    this.counter += value  + 1;
  }

  DecreceBy(value: number):void {
    this.counter -= value - 1
  }

}
