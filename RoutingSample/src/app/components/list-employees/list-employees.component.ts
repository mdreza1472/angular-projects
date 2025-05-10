import { Component, OnInit } from '@angular/core';
import { Subscribable, Subscription } from 'rxjs';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styles: [
  ]
})
export class ListEmployeesComponent implements OnInit {
  fetchedEmployees : Employee[] = [];
  employeeAdded : Subscription;

  constructor(private empService: EmployeeService) {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.empService.fetchEmployees().subscribe((emp: Employee[]) => {
        this.fetchedEmployees = emp;
      })
    }, 0);
    this.employeeAdded = this.empService.employeeAdded.subscribe((emp: Employee) => {
        const newEmployees = [...this.fetchedEmployees];
        newEmployees.push(emp);
        this.fetchedEmployees = newEmployees;
    });
  }

}
