import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TasksService} from '../tasks/tasks.service';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'tsk-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  private tasksCount: number = this.tasksService.getTasks().length;
  private $subs: Subscription[] = [];

  constructor(private tasksService: TasksService) {
  }

  ngOnInit(): void {
    this.$subs.push(this.tasksService.getNbTasks().subscribe(nbTasks => this.tasksCount = nbTasks));
  }

  ngOnDestroy(): void {
    this.$subs.forEach(sub => sub.unsubscribe());
  }

}
