import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  template: `
    <input id="input-todo"
      class="form-control input-lg"
      placeholder="What needs to be done?"
      [(ngModel)]="content"
      (keyup.enter)="addTodo()"
      autofocus>
  `,
  styles: [`
  .form-control {
    box-shadow: none;
    border-color: #e7ecee;
  }
  .form-control:focus {
    border-color: #23b7e5;
  }
  `]
})
export class TodoFormComponent {
  content = '';
  @Output() add = new EventEmitter();


  addTodo() {
    if (!this.content) { return; }
    this.add.emit(this.content);
    this.content = '';
  }

}
