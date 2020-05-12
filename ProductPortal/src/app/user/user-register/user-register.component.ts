import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
userregisterFormGroup:FormGroup;
  result:any;
  constructor(private formBuilder:FormBuilder,private router:Router , private http:HttpClient) { }

  ngOnInit() {
    this.userregisterFormGroup=this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      mobileNumber:['',[Validators.required,Validators.maxLength(10)]],
      email:['',Validators.required],
     gender:['',Validators.required],
     dateOfBirth:['',Validators.required],
      address:['',Validators.required],
    password:['',Validators.required],
   




    })
  }
register()
{


  var gender=parseInt(this.userregisterFormGroup.controls.gender.value)
this.http.post('https://localhost:44319/api/user',{
    FirstName:this.userregisterFormGroup.controls.firstName.value,
    LastName:this.userregisterFormGroup.controls.lastName.value,
    MobileNumber:this.userregisterFormGroup.controls.mobileNumber.value,
    Email:this.userregisterFormGroup.controls.email.value,
    Password:this.userregisterFormGroup.controls.password.value,
     Gender:gender,
      Address:this.userregisterFormGroup.controls.address.value,
      DOB:this.userregisterFormGroup.controls.dateOfBirth.value
   
  }).subscribe(res=>{
   this.result=res;
  
  });
this.router.navigate(['/userlogin']);

}
}
