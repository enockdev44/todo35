import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../../todo';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit { 

  todo: Todo;
  isTodoSaved: boolean;
  constructor(private tds: TodoService) { }
  
  form: Todo = {
    name: localStorage.getItem("todoName"),
    description: localStorage.getItem("todoDescription"),
    _id: localStorage.getItem("todoId")
  }
  
  onUpdateTodo(){
    this.tds.updateTodo(this.todo).subscribe(
      (response) => {
        console.log(response)
      },
      (err: any) => {
        console.log(err)
      },
      () => {
        console.log('Done updating todo.');
        this.isTodoSaved = true;
      }
    );
  }

  onSubmitTodo(f:NgForm) {
    this.todo = this.form;
    this.onUpdateTodo();    
  }
  ngOnInit(): void {
    this.isTodoSaved = false;
  }

}
