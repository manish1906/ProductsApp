import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
userloginFormGroup:FormGroup;
  result:any;
    constructor(private formBuilder:FormBuilder, private router:Router,private http:HttpClient) { }

    ngOnInit() {
        this.userloginFormGroup=this.formBuilder.group({

      email:['',Validators.required],
      password:['',Validators.required]


    })
    }
login()
{
  
  
              this.http.post('https://localhost:44319/api/userlogin',{
                  Email:this.userloginFormGroup.controls.email.value,
                  Password:this.userloginFormGroup.controls.password.value
                
                }).subscribe(res=>{
                  this.result=res;
                sessionStorage.setItem("key",this.result);
                  if(this.result!=0)
                  {
                    this.router.navigate(['/user']);
                  }
                  else
                  {
                    alert("Email or Password Wrong");
                  
                  }
                
                }              
                );

}
}
