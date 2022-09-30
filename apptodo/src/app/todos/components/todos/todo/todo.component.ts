import { TodosService } from './../service/todos.service';
import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from "@angular/core";
import { TodoInterface } from "../types/todos.interface";

@Component({
  selector: "app-todos-todo",
  templateUrl: './todo.component.html',
})
export class TodoComponent implements OnInit, OnChanges {
  editingText: string = '';

  @Input('todo') todoProps: TodoInterface | undefined;
  @Input('isEditing') isEditingProps: boolean = false;
  @Output('setEditingId') setEditingIdEvent: EventEmitter<string | null> = new EventEmitter

  @ViewChild("textInput") textInput: ElementRef | undefined;

  constructor(private todosService: TodosService) { }

  ngOnInit() {
    this.editingText = this.todoProps?.text || '';
  }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes['isEditingProps'].currentValue) {
      setTimeout(() => this.textInput?.nativeElement.focus(), 0);
    }
  }

  setTodoInEditMode(): void {
    console.log('setTodoInEditMode');
    this.setEditingIdEvent.emit(this.todoProps?.id);
  }

  removeTodo(): void {
    console.log('removeTodo');
    this.todosService.removeTodoById(this.todoProps?.id);
  }

  toggleTodo(): void {
    console.log('toggleTodo');
    this.todosService.toggleTodoById(this.todoProps?.id);
  }

  changeText(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.editingText = value;
    console.log('changeText');
  }

  changeTodo(): void {
    console.log('changeTodo', this.editingText);
    this.todosService.changeTodo(this.todoProps?.id, this.editingText);
    this.setEditingIdEvent.emit(null);
  }
}
