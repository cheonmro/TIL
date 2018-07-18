import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo-container.component';
import { NavItem } from '../nav-item.type';

@Pipe({
  name: 'todosFilter'
})
export class TodosFilterPipe implements PipeTransform {

  transform(todos: Todo[], currentTab?: NavItem): Todo[] {
    return todos.filter(todo =>
      currentTab === 'Active' ? todo.completed === false : currentTab === 'Completed' ? todo.completed : todo);
  }

}
