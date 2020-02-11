import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../../core/Task.model';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'tsk-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  constructor(private tasksService: TasksService) {}

  ngOnInit() {}

  getTasks(): Task[] {
    return this.tasksService.getTasks();
  }

  deleteTask(task: Task): void {
    this.tasksService.removeTask(task);
  }

  updateTask(task: Task): void {
    this.tasksService.updateTask(task);
  }

  completeTask(task: Task): void {
    this.tasksService.completeTask(task);
  }
}
