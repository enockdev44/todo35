import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from '../../todo';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-delete-todo',
  templateUrl: './delete-todo.component.html',
  styleUrls: ['./delete-todo.component.scss']
})
export class DeleteTodoComponent implements OnInit {

  todo: Todo;
  isTodoDeleted: boolean;
  constructor(private tds: TodoService, private router: Router) { }
  
  form: Todo = {
    name: localStorage.getItem("todoName"),
    description: localStorage.getItem("todoDescription"),
    _id: localStorage.getItem("todoId")
  }
  
  onDeleteTodo(){
    this.tds.deleteTodo(this.todo).subscribe(
      (response) => {
        console.log(response)
      },
      (err: any) => {
        console.log(err)
      },
      () => {
        console.log('Done deleting todo.');
        this.isTodoDeleted = true;
        setTimeout(() => this.router.navigate(['/todo/todo']) , 5000)
        
      }
    );
  }

  onSubmitTodo(f:NgForm) {
    this.todo = this.form;
    this.onDeleteTodo();    
  }
  ngOnInit(): void {
    this.isTodoDeleted = false;
  }

}
