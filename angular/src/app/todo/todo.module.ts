import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo/todo.component';
import { EditTodoComponent } from './todo/edit-todo/edit-todo.component';
import { DeleteTodoComponent } from './todo/delete-todo/delete-todo.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { ITodoComponent } from './todo/i-todo/i-todo.component';
import { TheaderComponent } from './theader/theader.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  
    TodoComponent,
       EditTodoComponent,
       DeleteTodoComponent,
       AddTodoComponent,
       ITodoComponent,
       TheaderComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule
  ]
})
export class TodoModule { }
