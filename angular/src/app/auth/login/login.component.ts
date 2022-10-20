import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {  Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  form = {
    email: null,
    password: null
  }
  onSubmit() {
    console.log(this.form)
    localStorage.setItem('token','abc');
    this.router.navigate(["/todo/"]);
    /*
    this._http.post('http://localhost:8888/auth/login', this.form).subscribe(
      (data) => {
        console.log(data)
      },
      (err) => console.log(err)
    )
    */
  }
  constructor(private _http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')=="abc") {
      this.router.navigate(["/todo/"]);
    }
  }

}