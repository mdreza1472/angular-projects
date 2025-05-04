import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  countries = ['India', 'Pakistan', 'Australia'];
  genders = ['Male', 'Female'];
  frm : FormGroup;

  constructor(private formBuilder: FormBuilder,
    private userService: UserService
  ) {

   }

  ngOnInit(): void {
    this.frm = this.formBuilder.group({
      name : new FormControl(null),
      age : new FormControl(null),
      address : new FormControl(null),
      country : new FormControl(null),
      gender : new FormControl(null)
    });
  }

  submit() : void {
    if(this.frm.valid){
      console.log(this.frm.value)
      this.userService.addNewUser(this.frm.value);
    } else {
      alert('Form is invalid');
    }
  }

}
