import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit{

  counter: number = 0;

  @Input() title!: string;

  @Output() counterEmit = new EventEmitter<number>();

  ngOnInit(): void {
    this.counter = (sessionStorage.getItem('counter') != undefined) ? 
      parseInt(sessionStorage.getItem('counter')!): 
      0;

    console.log('Creating component');
  }

  setCounter(): void{
    this.counter = this.counter + 1;
    sessionStorage.setItem('counter', this.counter.toString());
    
    this.counterEmit.emit(this.counter);
  }

}
