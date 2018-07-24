import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-todos-form',
  template: `
  <input id="input-todo" class="form-control input-lg"
    placeholder="What needs to be done?"
    [(ngModel)]="content"
    (keyup.enter)="addNewTodo()"
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
export class TodosFormComponent implements OnInit {
  content: string;
  @Output() addTodo = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  addNewTodo() {
    this.addTodo.emit(this.content);
    this.content = '';
  }
}
