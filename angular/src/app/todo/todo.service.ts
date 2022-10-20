import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private _http: HttpClient) { }

  getAllTodos(): Observable<Todo[]> {
    const url = 'http://localhost:8888/todo';
    return this._http.get<Todo[]>(url);
  }

  getTodo(): Observable<Todo> {
    const url = 'http://localhost:8888/todo/1';
    return this._http.get<Todo>(url);
  }

  createTodo(todo: Todo): Observable<Todo> {
    const url = 'http://localhost:8888/todo';
    return this._http.post<Todo>(url, todo);
  }

  
  updateTodo(todo: Todo): Observable<Todo> {
    const url = 'http://localhost:8888/todo/'+todo._id;
    return this._http.post<Todo>(url, todo);
  }

  deleteTodo(todo: Todo): Observable<Todo> {
    const url = 'http://localhost:8888/todo/'+todo._id;
    return this._http.delete<Todo>(url);
  }

  deleteManyTodo(many: string): Observable<Todo> {
    const url = 'http://localhost:8888/todo/';
    return this._http.request<Todo>('delete', url, {
      body: {many}
    });
  }
}
