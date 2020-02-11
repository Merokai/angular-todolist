import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksComponent} from './pages/tasks/tasks.component';
import {TaskListComponent} from './components/task-list/task-list.component';
import {TaskFormComponent} from './components/task-form/task-form.component';
import {TasksService} from './tasks.service';
import {TasksRoutingModule} from './tasks-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { DatePipe } from './date.pipe';
import { NewTaskComponent } from './pages/new-task/new-task.component';
import { EditTaskComponent } from './pages/edit-task/edit-task.component';

@NgModule({
  declarations: [
    TasksComponent,
    TaskListComponent,
    TaskFormComponent,
    DatePipe,
    NewTaskComponent,
    EditTaskComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, TasksRoutingModule],
  providers: [TasksService]
})
export class TasksModule {
}
