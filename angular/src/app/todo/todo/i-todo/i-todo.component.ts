import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../../todo';
import { TodoService } from '../../todo.service';

@Component({
  selector: 'app-i-todo',
  templateUrl: './i-todo.component.html',
  styleUrls: ['./i-todo.component.scss']
})

export class ITodoComponent implements OnInit {
  todo:Todo[];
  selectedTodo: boolean;

  constructor(private tds: TodoService, private router: Router) { }

  onGetTodos(){
    this.tds.getAllTodos().subscribe(
      async (response: Todo[]) => {
        this.todo = await response;
        if(this.todo !== null) {
          this.todo.forEach((t:Todo)=> {
            this.selectTodo(t, 'decochee')
          })
        }
      },
      (err: any) => {
        console.log(err)
      },
      () => {
        //console.log('Done retrieving data.')
      }
    );
  }

  editTodo(id:string, name:string, description:string) {
    localStorage.setItem("todoId", id);
    localStorage.setItem("todoName", name);
    localStorage.setItem("todoDescription", description);

    this.router.navigate(['/todo/edit', id])
  }

  deleteTodo(id:string, name:string, description:string) {
    localStorage.setItem("todoId", id);
    localStorage.setItem("todoName", name);
    localStorage.setItem("todoDescription", description);

    this.router.navigate(['/todo/delete', id])
  }

  onSelectTodo(todo: Todo) {
    const idInputCheckbox = 
    document.querySelector('#isCheckedTodoInput_'+todo._id) as HTMLInputElement | null;

    if(this.selectedTodo==true) {
      this.selectTodo(todo, 'decochee');
      this.selectedTodo=false;
    } else {
      this.selectTodo(todo, 'cochee');
      this.selectedTodo=true;     
    }

    idInputCheckbox.checked = this.selectedTodo;     

  }

  selectTodo(todo: Todo, action: string) {
    let todosTotal = [];
    let todosOn = [];
    let todosOff = [];
    switch(action) {
      case 'cochee':
        todosOn = this.todo.filter((data) => data._id == todo._id);
        todosOff = this.todo.filter((data) => data._id !== todo._id);
        for (const i of todosOn) {
            todosTotal.push(i);
        }
        todosOn[0].selected = true;
        for (const j of todosOff) {
            todosTotal.push(j);
        }
        break;
      case 'decochee':
        todosOff = this.todo.filter((data) => data._id == todo._id);
        todosOn = this.todo.filter((data) => data._id !== todo._id);
        for (const i of todosOn) {
            todosTotal.push(i);
        }
        todosOff[0].selected = false;
        for (const j of todosOff) {
            todosTotal.push(j);
        }  
        break;
      default:
        break;
    }
    this.todo = todosTotal;
  }

  onDeleteManyTodo(){
    let ids = [];
    let many = "";
    this.todo.forEach(function(t:Todo) {
      if(t.selected == true) {
        ids.push(t._id);
      }
    })
    many = ids.join("+");
    if((many!==null) || (many!=="")) {
      this.tds.deleteManyTodo(many).toPromise().then(()=> {
        // console.log(many);
      }).catch((err)=> {
        // console.error(err)
      }
      ).finally(()=>{
        this.onGetTodos();
      });
    }

  }

  selectAllTodo() {

    if(this.todo !== null) {
      this.todo.forEach((t:Todo)=> {

        this.selectTodo(t, 'decochee')
        const idInputCheckbox = 
        document.querySelector('#isCheckedTodoInput_'+t._id) as HTMLInputElement | null;
        idInputCheckbox.checked = true;     

      })
    }


  }

  unSelectAllTodo() {

    if(this.todo !== null) {
      this.todo.forEach((t:Todo)=> {

        this.selectTodo(t, 'decochee')
        const idInputCheckbox = 
        document.querySelector('#isCheckedTodoInput_'+t._id) as HTMLInputElement | null;
        idInputCheckbox.checked = false;     

      })
    }


  }

  ngOnInit(): void {
    this.onGetTodos();
    this.selectedTodo = false;
  }

}
