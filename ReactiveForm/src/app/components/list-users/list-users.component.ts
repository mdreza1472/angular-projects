import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscribable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { CustomCurrencyPipe } from 'src/app/pipes/custom-currency.pipe';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit, OnDestroy {

  users: User[] = [];  
  getUsers : Subscription;
  newUserAdded : Subscription;

  constructor(private userService : UserService) { }
  
  ngOnInit(): void {
    this.getUsers = this.userService.getUsers().subscribe({
      next: (fetchedUsers : User[]) => {
          this.users = fetchedUsers;
      }
    });
    this.newUserAdded = this.userService.newUserAdded.subscribe({
      next: (newUser) => {
        let newUsers = [...this.users];
        newUsers.push(newUser);
        this.users = newUsers;
      }
    })
  }

  ngOnDestroy(): void {
    this.getUsers.unsubscribe();
    this.newUserAdded.unsubscribe();
  }

}
