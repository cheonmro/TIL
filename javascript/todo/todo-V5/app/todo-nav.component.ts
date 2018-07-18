import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NavItem } from './nav-item.type';

@Component({
  selector: 'app-todo-nav',
  template: `
    <ul class="nav nav-xs nav-pills">
      <li *ngFor="let tab of tabs" [class.active]="currentTab===tab"
        (click)="changeTab.emit(tab)">
        <a>{{ tab }}</a>
      </li>
    </ul>
  `,
  styles: [`
  .nav {
    margin: 15px;
  }

  .nav.nav-xs > li > a {
    padding: 4px 10px;
  }

  .nav-pills > li.active > a {
    color: #fff !important;
    background-color: #23b7e5;
  }

  .nav-pills>li.active>a:active,
  .nav-pills>li.active>a:focus,
  .nav-pills>li.active>a:hover {
    background-color: #19a9d5;
  }

  .nav > li {
    cursor: pointer;
  }
  `]
})
export class TodoNavComponent {

  // get currentTab from todo-container
  @Input() currentTab: NavItem;
  // get tabs from todo-container
  @Input() tabs: NavItem[];

  // create (changeTab) output property
  // @Output() changeTab = new EventEmitter();
  @Output() changeTab = new EventEmitter();


}
