import {EventEmitter, Injectable} from '@angular/core';
import {Task} from '../core/Task.model';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  private tasks: Task[] = [];
  private nbTasks = new EventEmitter<number>();
  private $getTask: Observable<Task>;

  constructor() {
    this.createTask(new Task('Task 1', `J'ai trop de choses à faire!`));
    this.createTask(new Task('Task 2', 'Another task'));
    this.createTask(new Task('Task 3', 'One more task'));
  }

  getTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: number): Observable<Task> {
    return undefined;
  }

  createTask(task: Task): void {
    this.tasks.push(task);
    this.nbTasks.emit(this.tasks.length);
  }

  removeTask(task: Task): void {
    this.tasks = this.tasks.filter(el => el.id !== task.id);
    this.nbTasks.emit(this.tasks.length);
  }

  updateTask(task: Task): void {
    const index = this.tasks.findIndex(el => el.id === task.id);
    this.tasks[index] = task;
  }

  completeTask(task: Task): void {
    const index = this.tasks.findIndex(el => el.id === task.id);
    this.tasks[index].isCompleted = !this.tasks[index].isCompleted;
  }

  getNbTasks(): Observable<number> {
    return this.nbTasks;
  }
}
