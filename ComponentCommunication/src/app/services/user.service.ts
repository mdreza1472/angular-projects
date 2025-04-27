import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  $userSubject = new Subject<User>();
  users : User[] = [];

  constructor() { 

    Array.from( { length: 30 }).map((_,i) => {
      let user : User = {
          name: i + "name",
          age: i,
          address: i + "address"
      };
      this.users.push(user);
    });

  }

  fetchUsers() : Observable<User[]> {
    return of(this.users);
  }

  addUser(user: User) {
    console.log(user);
    this.$userSubject.next(user);
  }

}
