import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { navItem } from './nav-item.type';

@Component({
  selector: 'app-todos-nav',
  template: `
    <ul class="nav nav-xs nav-pills">
      <li *ngFor="let navItem of navItems"
        [class.active]="currentNavItem===navItem"
        (click)="changeCurrentNavItem.emit(navItem)">
        <a>{{ navItem }}</a>
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
export class TodosNavComponent implements OnInit {
  @Input() navItems: navItem[];
  @Input() currentNavItem: navItem;
  @Output() changeCurrentNavItem = new EventEmitter<navItem>();

  constructor() { }

  ngOnInit() {
  }

}
