import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Todo } from './todo-container.component';

@Component({
  selector: 'app-todo-list',
  template: `
    <ul id="todo-list" class="list-group">
      <li class="list-group-item" *ngFor="let todo of todos | todosFilter: currentTab">
        <div class="hover-anchor">
          <a class="hover-action text-muted">
            <span class="glyphicon glyphicon-remove-circle pull-right" (click)="remove.emit(todo.id)"></span>
          </a>
          <label class="i-checks" [attr.for]="todo.id">
            <input type="checkbox" [id]="todo.id" [checked]="todo.completed" (change)="change.emit(todo.id)"><i></i>
            <span>{{ todo.content }}</span>
          </label>
        </div>
      </li>
    </ul>
  `,
  styles: [`
  .list-group-item {
    padding-left: 0;
    padding-right: 15px;
    border-color: #e7ecee;
  }

  .hover-anchor {
    height: 30px;
    line-height: 30px;
  }

  .hover-action {
    display: none;
  }

  .list-group-item:hover .hover-action {
    display: block;
    transition: all .2s;
  }

  .hover-action > span {
    font-size: 18px;
    top: 5px;
    cursor: pointer;
  }

  .i-checks {
    width: 94%;
    padding-left: 35px;
    font-weight: normal;
    user-select: none;
    cursor: pointer;
  }

  .i-checks > input[type=checkbox] {
    display: none;
  }

  .i-checks > i {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-top: -2px;
    margin-right: 5px;
    margin-left: -20px;
    background-color: #fff;
    border: 1px solid #cfdadd;
    vertical-align: middle;
  }

  .i-checks > i:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background-color: transparent;
    transition: all .1s;
  }

  .i-checks input:checked + i:before {
    top: 4px;
    left: 4px;
    width: 10px;
    height: 10px;
    background-color: #23b7e5;
  }
  `]
})
export class TodoListComponent {

  // get todos from todo-container
  @Input() todos: Todo[];

  @Output() remove = new EventEmitter();
  @Output() change = new EventEmitter();

  // get currentTab from todo-container
  @Input() currentTab: string;


}
