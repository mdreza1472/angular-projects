import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy, AfterViewInit{

  displayedColumns: string[] = ['name', 'age', 'address'];

  userFetchSubscription : Subscription;
  userAddSubscription : Subscription;
  users: User[] = [];
  dataSource = new MatTableDataSource<User>();
  @ViewChild(MatSort) sort!: MatSort;  
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(private userService: UserService,
    private changeDetectorRefs: ChangeDetectorRef
  ) { }
    
  ngOnInit(): void {
    console.log("onitnit executed");
    this.userFetchSubscription = this.userService.fetchUsers().subscribe((users: User[]) =>{
      this.users = users;
      console.log(this.users);      
      this.dataSource.data = [...this.users];  // Use spread operator to create a new reference
    });
    this.userAddSubscription = this.userService.$userSubject.subscribe((user:User) =>{
      console.log("userAddSubscription executed");
      console.log(user);
      console.log(this.users);
      this.dataSource.data = [...this.users]; 
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  
  ngOnDestroy(): void {
    this.userFetchSubscription.unsubscribe();
    this.userAddSubscription.unsubscribe();
  }

}
