import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { from, Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users : User[] = [];
  newUserAdded = new Subject<User>();

  constructor() {

    Array.from({ length: 14}).map((_, i) => (
      this.users.push({
        name : `name${i}`,
        age : i+18,
        address : `address${i}`,
        country : `India`,
        gender : 'Male'
      })
    )); 

  }

  getUsers() : Observable<User[]> {
    let newUsers = [...this.users];
    return of(newUsers);
  }

  addNewUser(user : User) {
    let newUsers = [...this.users];
    newUsers.push(user);
    this.users = newUsers;
    this.newUserAdded.next(user);
  }


}
