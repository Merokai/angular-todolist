import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/core/Task.model';

@Component({
  selector: 'tsk-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input() private tasks: Task[];
  private editedTask: Task | boolean = false;

  @Output() taskDeleted = new EventEmitter<Task>();
  @Output() taskUpdated = new EventEmitter<Task>();
  @Output() taskCompleted = new EventEmitter<Task>();

  constructor() {}

  ngOnInit() {}

  editTask(task: Task) {
    this.editedTask = task;
  }

  cancelEditTask(){
    this.editedTask = false;
  }

  updateTask(task: Task){
    this.taskUpdated.emit(task);
    this.cancelEditTask();
  }

  deleteTask(task: Task) {
    this.taskDeleted.emit(task);
  }

  completeTask(task: Task) {
    this.taskCompleted.emit(task);
  }
}
