import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees : Employee[] = [];
  employeeAdded = new Subject<Employee>();

  constructor() {
    Array.from( { length: 14} ).map((_, idx) => (
        this.employees.push({
          name : `Employee ${idx}`,
          age : idx + 18
        })
    ));
  }

  fetchEmployees() : Observable<Employee[]> {
    const newEmployees = [...this.employees];
    return of( this.employees);
  }

  addEmployee(employee : Employee)  {
    const newEmployees = [...this.employees];
    newEmployees.push(employee);
    this.employees  = newEmployees;
    this.employeeAdded.next(employee);
  }

  fetchEmployee(name: string) : Employee {
    let employee : Employee= null;
    employee = this.employees.find((emp:Employee)=> {
      if(emp.name===name){
        return emp;
      }
    });

    return employee;
  }

  
}
