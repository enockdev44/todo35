import { Injectable } from '@angular/core';
import { Message } from './message';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: Message[] = [
    new Message(1, 2, "Salut salut an!"),
    new Message(2, 1, "Salut Aona lesy?"),
    new Message(1, 2, "Zao fotsiny"),
    new Message(2, 1, "kozy ve?"),
    new Message(1, 2, "eny lesy"),
    new Message(2, 1, "marina zany e, aleo aloa ikandra amizay e"),
    new Message(1, 2, "zaho ko ary lesy zao andeha ikandra"),
    new Message(2, 1, "mazotoa lah"),
    new Message(1, 2, "mazotoa koa lesy")
  ];
  constructor() { }
}
