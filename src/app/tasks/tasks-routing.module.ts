import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TasksComponent} from './pages/tasks/tasks.component';
import {NewTaskComponent} from './pages/new-task/new-task.component';


const routes: Routes = [
  {
    path: 'tasks/new',
    component: NewTaskComponent
  },
  {
    path: 'tasks/:id',
    component: NewTaskComponent
  },
  {
    path: 'tasks',
    component: TasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule {
}
