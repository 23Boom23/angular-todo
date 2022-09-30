import { FilterEnum } from './../types/filter.enum';
import { TodosService } from './../service/todos.service';
import { Component } from "@angular/core";
import { map, Observable } from 'rxjs';

@Component({
  selector: "app-todos-footer",
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  noTodoClass$: Observable<boolean>;
  activeCount$: Observable<number>;
  itemsLeftText$: Observable<string>;
  filter$: Observable<FilterEnum>;
  filterEnum = FilterEnum;

  constructor(private todosService: TodosService) {
    this.activeCount$ = this.todosService.todos$.pipe(map((todos) => todos.filter((todo) => !todo.isCompleted).length));
    this.itemsLeftText$ = this.activeCount$.pipe(map((count) => count === 1 ? 'item left' : 'items left'));
    this.noTodoClass$ = this.todosService.todos$.pipe(map((todos) => todos.length === 0));
    this.filter$ = this.todosService.filter$;
  }

  changeFilter(event: Event, filterName: FilterEnum): void {
    event.preventDefault()
    console.log(filterName, 'filter');
    this.todosService.changeFilter(filterName);
  }
}
