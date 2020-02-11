import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'tsk-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() username: string;
  constructor() { }

  ngOnInit() {
  }

}
