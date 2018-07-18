import { Component, OnInit } from '@angular/core';

export interface Todo {
  id: number;
  content: string;
  completed: boolean;
}

type NavItem =  'All' | 'Active' | 'Completed';

@Component({
  selector: 'app-todo-container',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <h1 class="title">Todos</h1>

          <app-todo-form
            (add)="addTodo($event)">
          </app-todo-form>


           <app-todo-nav
             [tabs]="tabs"
             [currentTab]="currentTab"
             (changeTab)="changeCurrentTab($event)">
           </app-todo-nav>


          <app-todo-list
            (remove)="removeTodo($event)"
            (change)="changeTodo($event)"
            [todos]="todos"
            [currentTab]="currentTab">
          </app-todo-list>


          <app-todo-footer
            (markAllBox)="markAll($event)"
            (clearBtn)="clearCompletedTodo()"
            [todos]="todos">
          </app-todo-footer>


        </div>
      </div>
    </div>

    <pre>{{ todos | json }}</pre>
  `,

  styles: [`
  .text-muted {
    color: #98a6ad;
  }

  a, a:focus, a:hover {
    color: inherit;
    text-decoration: none;
  }

  button:focus { outline: none !important; }

  .title {
    font-size: 80px;
    font-weight: 100;
    text-align: center;
    color: #23b7e5;
    margin-bottom: 30px;
  }

  `]
})
export class TodoContainerComponent implements OnInit {
  todos: Todo[];
  content: string;
  tabs: NavItem[] = ['All', 'Active', 'Completed'];
  currentTab: NavItem = 'All';

  constructor() { }

  ngOnInit() {
    this.todos = [
      { id: 1, content: 'HTML', completed: true },
      { id: 2, content: 'CSS', completed: false },
      { id: 3, content: 'JS', completed: false }
    ];
  }

  addTodo(content: string) {
    this.todos = [...this.todos, { id: this.getNextId(), content, completed: false }];
  }

  getNextId(): number {
    return !this.todos.length ? 1 : Math.max(...this.todos.map((({ id }) => id ))) + 1;
  }

  changeCurrentTab(tab: NavItem) {
    this.currentTab = tab;
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

  clearCompletedTodo() {
    this.todos = this.todos.filter(todo => !todo.completed);
  }

}

