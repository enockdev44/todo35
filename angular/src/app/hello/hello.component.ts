import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { MessageService } from '../message.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})

export class HelloComponent implements OnInit {
  title: string;
  message: string;
  user: User;
  friends: User[];
  conversations: Message[];

  constructor(private us:UserService, private mes:MessageService) {
  }
  
  ngOnInit(): void {
    this.title = "Welcome to Angular project";
    this.message = "Starter project is ready soon";
    this.user = this.us.enock;
    this.friends = this.us.friends;
    this.conversations = this.mes.messages;

  }

}
