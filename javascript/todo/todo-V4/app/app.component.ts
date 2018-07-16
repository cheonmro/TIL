import { Component, OnInit } from '@angular/core';

export interface Todo {
  id: number;
  content: string;
  completed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  todos: Todo[];
  content: string;
  tabs = ['All', 'Active', 'Completed'];
  currentTab = 'All';

  ngOnInit() {
    this.todos = [
      { id: 1, content: 'HTML', completed: true },
      { id: 2, content: 'CSS', completed: false },
      { id: 3, content: 'JS', completed: false }
    ];
  }

  addTodo() {
    if (!this.content) { return; }
    this.todos = [...this.todos, { id: this.getNextId(), content: this.content, completed: false }];
    this.content = '';
  }

  getNextId(): number {
    return !this.todos.length ? 1 : Math.max(...this.todos.map((({ id }) => id ))) + 1;
  }

  changeTodo(id: number) {
    this.todos = this.todos.map(todo => Object.assign({}, todo, todo.id === id ? { completed: !todo.completed } : todo));
    // this.todos = this.todos.map(todo => todo.id === id ? ({ ...todo, completed: !todo.completed }) : todo);
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  markAll(checked: boolean) {
    this.todos = this.todos.map(todo => Object.assign({}, todo, checked === true ? { completed: true } : { completed: false }));
  }

  clearTodo() {
    this.todos = this.todos.filter(todo => todo.completed === false);
  }

  countCompleted() {
    return this.todos.filter(todo => todo.completed).length;
  }

  countItemsLeft() {
    return this.todos.filter(todo => todo.completed === false).length;
  }

}
