import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template:`
  <h3> Counter: {{counter}}</h3>
  <button (click)="increase(1)" >+1</button>

<button (click)="reset()">Reset</button>

<button  (click)="increase(-1)">-1</button>

  `
})

export class CounterComponent {
  public title: string = 'Hola mundo';
  public counter: number = 10;

increase(value: number):void{
  this.counter = this.counter + value;
}

reset(){
  this.counter = 10;
}
}
