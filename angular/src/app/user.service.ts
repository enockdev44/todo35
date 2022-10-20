import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  enock: User = new User("Enock", "rh@enock.mg", "Salut à @tous", 27);
  friends: User[] = [
    new User("friend1", "f1@enock.mg", "Salut à @Enock", 27),
    new User("friend2", "f2@enock.mg", "Salut à @Enock", 27),
    new User("friend3", "f3@enock.mg", "Salut à @Enock", 27),
    new User("friend4", "f4@enock.mg", "Salut à @Enock", 27),
    new User("friend5", "f5@enock.mg", "Salut à @Enock", 27),
  
  ];

  constructor() {}
}
