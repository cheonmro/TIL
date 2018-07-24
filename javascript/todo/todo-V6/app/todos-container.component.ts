import { Component, OnInit } from '@angular/core';
import { Todo } from './todos.interface';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { navItem } from './nav-item.type';

@Component({
  selector: 'app-todos-container',
  template: `
    <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <h1 class="title">Todos</h1>

        <app-todos-form
        (addTodo)="addTodo($event)">
        </app-todos-form>


        <app-todos-nav
        [navItems]="navItems"
        [currentNavItem]="currentNavItem"
        (changeCurrentNavItem)="changeCurrentNavItem($event)">
        </app-todos-nav>


        <app-todos-list
        [todos]="todos"
        [currentNavItem]="currentNavItem"
        (removeTodo)="removeTodo($event)"
        [todos]="todos"
        (toggleTodo)="toggleTodo($event)">
        </app-todos-list>


        <app-todos-footer
        (toggleAllTodo)="toggleAllTodo($event)"
        [todos]="todos"
        (clearCompletedTodo)="clearTodo($event)">
        </app-todos-footer>


      </div>
    </div>
  </div>

  <pre>{{ todos | json }}</pre>

  `,
  styles: [`
    .title {
      font-size: 80px;
      font-weight: 100;
      text-align: center;
      color: #23b7e5;
      margin-bottom: 30px;
    }
  `]
})
export class TodosContainerComponent implements OnInit {
  todos: Todo[];
  content = '';
  navItems: navItem[] = ['All', 'Active', 'Completed'];
  currentNavItem: navItem = 'All';

  url = environment.url;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Todo[]>(this.url)
      .subscribe(todos => this.todos = todos);
  }

  addTodo(content: string) {
    if (!content) { return; }
    const newTodo = { id: this.getNextId(), content, completed: false };
    this.http.post(this.url, newTodo)
      .subscribe(() => this.todos = [newTodo, ...this.todos]);
    this.content = '';
  }

  getNextId(): number {
    return !this.todos.length ? 1 : Math.max(...this.todos.map(({id}) => id)) + 1;
  }

  changeCurrentNavItem(tab: navItem) {
    this.currentNavItem = tab;
  }

  removeTodo(id: number) {
    this.http.delete(`${this.url}/${id}`, {responseType: 'text'})
      .subscribe(() => this.todos = this.todos.filter(todo => todo.id !== id));
  }

  toggleTodo(id: number) {
    const { completed } = this.todos.find(todo => todo.id === id);
    this.http.patch(`${this.url}/${id}`, { completed: !completed }, {responseType: 'text'})
      .subscribe(() => this.todos = this.todos.map(todo => todo.id === id ? ({...todo, completed: !todo.completed }) : todo));
  }

  toggleAllTodo(checked: boolean) {
    this.http.patch(this.url, { completed: checked }, {responseType: 'text'})
      .subscribe(() => this.todos = this.todos.map(todo => Object.assign({}, todo, { completed: checked })));
  }

  clearTodo() {
    console.log('clear');
    const completedId = this.todos.filter(todo => todo.completed);
    completedId.forEach(todo =>
      this.http.delete(`${this.url}/${todo.id}`, {responseType: 'text'})
      .subscribe(() => this.todos = this.todos.filter(todo => !todo.completed))
    );
  }

}
