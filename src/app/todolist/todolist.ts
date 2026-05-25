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
  newTask: string = '';
  
  onSubmit(form: NgForm) {
    if (this.newTask.trim()) {
      this.taskArray.push({ task: this.newTask, isCompleted: false });
      this.newTask = '';
      form.reset(); // Reset the form after submission
    }
  }
  

  toggleTask(task: any) {
    task.isCompleted = !task.isCompleted;
  }

  deleteTask(task: any) {
    this.taskArray = this.taskArray.filter(t => t !== task);
  }

  editTask(task: any) {
    this.taskArray = this.taskArray.filter(t => t !== task);
  }

  saveTask(task: any) {
    this.taskArray = this.taskArray.filter(t => t !== task);
  }
}
