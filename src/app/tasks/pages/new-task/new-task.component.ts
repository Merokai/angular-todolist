import {Component, OnInit} from '@angular/core';
import {Task} from '../../../core/Task.model';
import {TasksService} from '../../tasks.service';
import {Router} from '@angular/router';

@Component({
  selector: 'tsk-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {
  private myNewTask: Task | undefined;
  private isValid = false;

  constructor(private tasksService: TasksService, private router: Router) {
  }

  ngOnInit() {
    this.myNewTask = new Task('', '');
  }

  formChanged(value: {valid: boolean, task: { title: string, description: string} | undefined } ) {
    this.isValid = value.valid;
    if (value.valid) {
      this.myNewTask = {...this.myNewTask, title: value.task.title, description: value.task.description};
    }
  }

  onSubmit(): void {
    this.tasksService.createTask(this.myNewTask);
    this.router.navigate(['/tasks']);
  }

  onCancel(): void {
    this.router.navigate(['/tasks']);
  }

}
