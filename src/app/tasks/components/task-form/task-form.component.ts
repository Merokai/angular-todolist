import {Component, OnInit, Output, EventEmitter, Input, OnDestroy} from '@angular/core';
import {
  FormGroup,
  Validators,
  FormControl,
  FormBuilder
} from '@angular/forms';
import {Task} from 'src/app/core/Task.model';
import {Subscription} from 'rxjs';

@Component({
  selector: 'tsk-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit, OnDestroy {
  private form: FormGroup;
  private sub: Subscription;

  @Input() task: Task;
  @Output() changed = new EventEmitter<{ valid: boolean, task: { title: string, description: string } | undefined }>();

  private title = '';
  private description = '';

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    // If a task was given as Input
    if (this.task) {
      // Then the inputs are set to the given values
      this.title = this.task.title;
      this.description = this.task.description;
    }

    this.form = this.fb.group({
      title: [this.title, Validators.required],
      description: [this.description, Validators.required]
    });

    // Notify parent about form value changes
    this.sub = this.form.valueChanges.subscribe(value => {
      this.changed.emit({
        valid: this.form.valid,
        task: this.form.valid ? value : undefined
      });
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
