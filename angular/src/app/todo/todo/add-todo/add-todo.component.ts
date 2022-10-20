import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from '../../todo';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  todo: Todo;
  isTodoSaved: boolean;
  constructor(private tds: TodoService, private router: Router) { }
  form: Todo = {
    name: null,
    description: null,
    _id: "0"
  }
  onCreateTodo(){
    this.tds.createTodo(this.todo).subscribe(
      (response) => {
        console.log(response)
      },
      (err: any) => {
        console.log(err)
      },
      () => {
        console.log('Done creating todo.');
        this.isTodoSaved = true;
        setTimeout(() => {
          this.router.navigate(['/todo/'])
        }, 3000)
      }
    );
  }

  onSubmitTodo(f:NgForm) {
    this.todo = this.form;
    this.onCreateTodo();    
  }
  ngOnInit(): void {
    this.isTodoSaved = false;
  }

}
