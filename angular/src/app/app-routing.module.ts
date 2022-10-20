import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './_utils/error/error.component';

const routes: Routes = [
  {path: '*', redirectTo: 'todo',  pathMatch: 'full' },
  {
    path: 'todo', loadChildren: () => import('./todo/todo.module')
    .then(m=>m.TodoModule)
  },
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module')
    .then(m=>m.AuthModule)
  },
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
