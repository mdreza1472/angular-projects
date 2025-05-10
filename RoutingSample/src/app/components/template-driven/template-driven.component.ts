import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styles: [
  ]
})
export class TemplateDrivenComponent implements OnInit {

  @ViewChild("fm") fm : NgForm;
  nameUpdt : string = null;
  ageUpdt : number = null;


  constructor(private router: Router,
    private activeRouter: ActivatedRoute,
    private employeeSrvc : EmployeeService
  ) { }

  ngOnInit(): void {
    setTimeout(()=> {
      this.activeRouter.params?.subscribe((prm : Params[])=>{
        console.log(prm);
        if(prm !=null &&  prm["name"] != null) {
          this.nameUpdt  = prm["name"];
          let emp = this.employeeSrvc.fetchEmployee(this.nameUpdt);
          this.ageUpdt = emp.age;
        }
      });
    }, 500);
  }

  onSubmit( frm: NgForm) {
    if(frm.invalid){
      alert("form is invalid");
      return;
    }

    console.log(frm.form.value);

    this.employeeSrvc.addEmployee(frm.form.value);

    this.router.navigate(['list-employees'])
  }

}
