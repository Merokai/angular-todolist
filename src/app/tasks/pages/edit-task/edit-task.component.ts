import {Component, OnInit} from '@angular/core';
import {Task} from '../../../core/Task.model';
import {TasksService} from '../../tasks.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'tsk-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  private myTask: Task;
  private isValid = false;
  private $task: Observable<Task>;

  constructor(private tasksService: TasksService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.$task = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.tasksService.getTaskById(Number(params.get('id'))))
    );
  }

  formChanged(value: { valid: boolean, task: { title: string, description: string } | undefined }) {
    this.isValid = value.valid;
    if (value.valid) {
      this.myTask = {...this.myTask, title: value.task.title, description: value.task.description};
    }
  }

  onSubmit(): void {
    this.tasksService.updateTask(this.myTask);
    this.router.navigate(['/tasks']);
  }

  onCancel(): void {
    this.router.navigate(['/tasks']);
  }

}
