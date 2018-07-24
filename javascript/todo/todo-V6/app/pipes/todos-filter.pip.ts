import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todos.interface';
import { navItem } from '../nav-item.type';

@Pipe({
  name: 'todosFilter'
})
export class TodosFilterPipe implements PipeTransform {

  transform(todos: Todo[], currentNavItem?: navItem): Todo[] {
    return todos.filter(todo => {
        switch (currentNavItem) {
          case 'Active':
            return !todo.completed;
          case 'Completed':
            return todo.completed;
          default:
            return todo;
        }
      }
    );
  }

}
