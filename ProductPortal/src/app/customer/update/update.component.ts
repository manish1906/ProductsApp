import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  customerCode:any;
  firstName:string;
  lastName: string;
  email: string;
  mobileNumber: any;
  gender:any;
  address:string;
  DOB:any;
  result:any;
  
  
 upadtecustomerFormGroup:FormGroup;
  constructor(private formBuilder:FormBuilder,private activateRoute:ActivatedRoute,private router:Router , private http:HttpClient) { }

  ngOnInit() {
     this.customerCode=this.activateRoute.snapshot.paramMap.get("customerCode");
    this.firstName=this.activateRoute.snapshot.paramMap.get("firstName");
    this.lastName=this.activateRoute.snapshot.paramMap.get("lastName");
    this.mobileNumber=this.activateRoute.snapshot.paramMap.get("mobileNumber");
    this.email=this.activateRoute.snapshot.paramMap.get("email");
    this.gender=this.activateRoute.snapshot.paramMap.get("gender");
   this.DOB=this.activateRoute.snapshot.paramMap.get("DOB");
   this.address=this.activateRoute.snapshot.paramMap.get("address");
    this.upadtecustomerFormGroup=this.formBuilder.group({
      firstName:[this.firstName,Validators.required],
      lastName:[this.lastName,Validators.required],
      mobileNumber:[this.mobileNumber,Validators.required],
      email:[this.email,Validators.required],
     gender:[this.gender,Validators.required],
     dateOfBirth:[this.DOB,Validators.required],
      address:[this.address,Validators.required]
   



    })
  }
update()
{
  var gender=parseInt(this.upadtecustomerFormGroup.controls.gender.value)
this.http.put('https://localhost:44319/api/customer',{
  CustomerCode:parseInt(this.customerCode),
    FirstName:this.upadtecustomerFormGroup.controls.firstName.value,
    LastName:this.upadtecustomerFormGroup.controls.lastName.value,
    MobileNumber:this.upadtecustomerFormGroup.controls.mobileNumber.value,
    Email:this.upadtecustomerFormGroup.controls.email.value,
     Gender:gender,
      Address:this.upadtecustomerFormGroup.controls.address.value,
      DOB:this.upadtecustomerFormGroup.controls.dateOfBirth.value
   
  }).subscribe(res=>{this.result=res;
   
  });
this.router.navigate(['/customer']);


}
}
