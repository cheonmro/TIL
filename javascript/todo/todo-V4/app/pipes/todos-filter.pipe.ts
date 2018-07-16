import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../app.component';

@Pipe({
  name: 'todosFilter'
})
export class TodosFilterPipe implements PipeTransform {

  transform(todos: Todo[], currentTab?: string): Todo[] {
    return todos.filter(todo =>
      currentTab === 'Active' ? todo.completed === false : currentTab === 'Completed' ? todo.completed : todo);
  }

}
