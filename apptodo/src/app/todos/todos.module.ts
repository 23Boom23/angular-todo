import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { TodosComponent } from 'src/app/todos/components/todos/todos.component';
import { HeaderComponent } from "src/app/todos/components/todos/header/header.component";
import { TodosService } from "./components/todos/service/todos.service";
import { MainComponent } from "./components/todos/main/main.component";

const routes: Routes = [
  {path:'', component: TodosComponent}
]


@NgModule({
  declarations: [TodosComponent, HeaderComponent, MainComponent],
  imports: [RouterModule.forChild(routes)],
  providers: [TodosService],
})
export class TodosModule {

}
