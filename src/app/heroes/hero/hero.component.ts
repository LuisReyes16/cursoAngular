import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent {
  public name: string = 'iroman';
  public age: number = 42;

  //metodo de variable
  get capitalizaName(): string {
    return 'metodo de variable';
  }

  getHeroDescription(): string {
    return `name : ${this.name} - edad: ${this.age}`;
  }

  changeName() : void{
    this.name = 'Luisin';
  }

  changeAge() : void{
    this.age = 28;
  }
}
