import { TodosService } from './../service/todos.service';
import { Component } from "@angular/core";

@Component({
  selector: "app-todos-header",
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  text: string = '';

  constructor(private todosService: TodosService) {
    this.todosService.todos$.subscribe((todos) => {
      console.log(todos);
    })
  }

  changeText(event: Event):void {
    const target = event.target as HTMLInputElement;
    this.text = target.value;
    console.log(target.value);
  }

  addTodo(): void {
    console.log('addTOdo', this.text)
    this.todosService.addTodo(this.text)
    this.text=''
  }


}
