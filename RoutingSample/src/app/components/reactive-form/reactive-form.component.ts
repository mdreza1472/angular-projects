import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styles: [
  ]
})
export class ReactiveFormComponent implements OnInit {

  fm : FormGroup;

  constructor(private frmBuilder : FormBuilder,
    private employeeSrvc : EmployeeService,
    private router : Router,
    private activatedRoute : ActivatedRoute
  ) {
    

   }

  ngOnInit(): void {
    this.fm = this.frmBuilder.group({
      name : new FormControl(""),
      age : new FormControl("")
    })
  }

  onSubmit() {
      if(this.fm.invalid){
        alert("form is invalid");
        return;
      }
  
      console.log(this.fm.value);
  
      this.employeeSrvc.addEmployee(this.fm.value);

      this.router.navigate(['list-employees'])
    }
  

}
