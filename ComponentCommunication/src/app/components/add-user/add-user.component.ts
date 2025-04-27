import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  users : User[] = [];


  constructor(private userService: UserService
  ) {

  }

  ngOnInit(): void {
    this.userService.fetchUsers().subscribe((users) => {
      this.users = users;
    });
  }

  formSubmit(frm: NgForm) {
    if(!frm.valid) {
      return;
    }

    let user = frm.value;
    this.users.push(user);
    this.userService.addUser(user);
  }

}
