import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodoComponent } from './todo/todo.component';
import { EditTodoComponent } from './todo/edit-todo/edit-todo.component';
import { DeleteTodoComponent } from './todo/delete-todo/delete-todo.component';
import { AddTodoComponent } from './todo/add-todo/add-todo.component';
import { ITodoComponent } from './todo/i-todo/i-todo.component';
import { AuthGuard } from '../_helpers/auth.guard';

const routes: Routes = [
  {
    path: '', component: TodoComponent, children: [
      {path: '', redirectTo: 'list', pathMatch: 'full' },
      {path: 'list', component: ITodoComponent},
      {path: 'edit/:tid', component: EditTodoComponent, canActivate: [AuthGuard]},
      {path: 'delete/:tid', component: DeleteTodoComponent, canActivate: [AuthGuard]},
      {path: 'add', component: AddTodoComponent, canActivate: [AuthGuard]},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TodoRoutingModule { }
