import { Component, OnInit } from '@angular/core';
import {  UserService } from './services/user.service';
import { User } from './models/User';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  
  title = 'ComponentCommunication';

  ngOnInit(): void {
    
  }

  

}
