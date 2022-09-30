import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TodosComponent } from 'src/app/todos/components/todos/todos.component';
import { HeaderComponent } from "src/app/todos/components/todos/header/header.component";
import { TodosService } from "./service/todos.service";
import { MainComponent } from "./main/main.component";
import { TodoComponent } from './todo/todo.component';
import { CommonModule } from "@angular/common";
import { FooterComponent } from "./footer/footer.component";

const routes: Routes = [
  { path: '', component: TodosComponent }
]

@NgModule({
  declarations: [TodosComponent, HeaderComponent, MainComponent, TodoComponent, FooterComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [TodosService],
})
export class TodosModule {

}
