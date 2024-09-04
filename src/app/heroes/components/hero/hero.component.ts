import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero-list',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'Ironman';
  public age: number = 34;

  //geters son un metodo que crean propiedad
  // no se invocan con ()
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} -  ${this.age}`;
  }
  changeHero(): void {
    this.name = 'Spiderman'
    //throw 'Metodo no implementado'
  }

  changeAge(): void{
    this.age = 25
  }
}
