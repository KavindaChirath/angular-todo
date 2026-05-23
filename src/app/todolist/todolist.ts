import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-todolist',
  imports: [FormsModule, CommonModule],
  templateUrl: './todolist.html',
  styleUrl: './todolist.css',
})
export class Todolist {
  taskArray = [{ task: 'Brush teeth' , isCompleted: false}];
  
  onSubmit(form: NgForm) {
    console.log(form.value);
  }

  toggleTask(task: any) {
    task.isCompleted = !task.isCompleted;
  }

  deleteTask(task: any) {
    this.taskArray = this.taskArray.filter(t => t !== task);
  }
}
