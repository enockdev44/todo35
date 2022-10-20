import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router) { }
  
  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(["/auth"]);
  }

  onCancelLogout() {
    this.router.navigate(["/todo"]);
  }
  
  ngOnInit(): void {
  }

}
