import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['spiderman', 'ironman', 'hulk', 'thor']
  public deleteHero?: string

  removeLastHero():void{
    //Esta variable solo existe aca
    this.deleteHero = this.heroNames.pop();
  }
}
