import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Todo } from './todo-container.component';

@Component({
  selector: 'app-todo-footer',
  template: `
    <div class="col-xs-6">
      <label class="i-checks" style="padding-left: 20px">
        <input id="chk-allComplete" type="checkbox" (change)="markAllBox.emit($event.target.checked)">
        <i></i><span>Mark all as complete</span>
      </label>
    </div>
    <div class="col-xs-6 text-right">
      <button class="btn btn-default btn-xs" (click)="clearBtn.emit()">
      Clear completed (<span>{{ countCompleted() }}</span>)</button>
      <strong>{{ countItemsLeft() }}</strong> items left
    </div>
  `,
  styles: [`
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
export class TodoFooterComponent {
  // create markAllBox output property
  @Output() markAllBox = new EventEmitter();
  @Output() clearBtn = new EventEmitter();

  @Input() todos: Todo[];

  countCompleted() {
    return this.todos.filter(todo => todo.completed).length;
  }

  countItemsLeft() {
    return this.todos.filter(todo => !todo.completed).length;
  }

}
