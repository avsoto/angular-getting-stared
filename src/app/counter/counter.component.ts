import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit{

  counter: number = 0;

  ngOnInit(): void {
    this.counter = parseInt(sessionStorage.getItem('counter')!) || 0;
    console.log('Creando componente');
  }

  setCounter(): void{
    this.counter = this.counter + 1;
    sessionStorage.setItem('counter', this.counter.toString());
  }

}
