import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from "./counter/counter.component";

@Component({
  selector: 'app-root',
  imports: [CounterComponent, RouterOutlet, CommonModule, CounterComponent],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'angular-getting-stared';

  subTitle: string = "Counter with session state"
 
  users:string[] = ['Pepe', 'Maria', 'Jose'];

  books!: string[];

  visible: boolean = false;

  counter: number = 0;

  ngOnInit(): void {
    this.counter = parseInt(sessionStorage.getItem('counter')!) || 0;
  }

  setVisible(): void {
    this.visible = this.visible? false : true;
    console.log('Clic on setVisible');
  }

  setCounter(event:number): void{
    this.counter = event;
  }
}
