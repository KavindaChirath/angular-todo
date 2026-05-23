import { Component, signal } from '@angular/core';
import { Todolist } from './todolist/todolist';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',

  imports: [Todolist,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo');
}
