import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-getting-stared';

  users:string[] = ['Pepe', 'Maria', 'Jose'];

  books!: string[];

  visible: boolean = false;

  setVisible(): void {
    this.visible = this.visible? false : true;
    console.log('Clic on setVisible');
  }
}
