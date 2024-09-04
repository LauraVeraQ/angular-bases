import { Component } from "@angular/core";
//import {} from ""

//si creo un componente necesito un template
@Component({
  selector:'app-counter',
  //TEMPLATE MAXIMO 4 LINEAS
  template: `<p>{{counter}}</p>
  <button (click)="increaseBy(5)">+1</button>
  <button (click)="valueInitial()">Reset</button>
  <button (click)="decreseBy(1)">-1</button>`,
})


export class CounterComponent {
  public title: string = 'Hola mundo';
  public counter: number = 10;
// por defecto los metodos o funciones de clase son publicas
  increaseBy(value: number): void {
    this.counter += value;
  }

  decreseBy(value: number):void {
    this.counter -= value;
  }

  valueInitial ():void {
    this.counter = 10;
  }
  //constructor(public title: string, public counter: number) { }

  //ngOnInit() { }
}


