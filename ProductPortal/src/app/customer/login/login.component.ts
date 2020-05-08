import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup:FormGroup;
  result:any;
  constructor(private formBuilder:FormBuilder, private router:Router,private http:HttpClient) { }

  ngOnInit() {
      this.loginFormGroup=this.formBuilder.group({

    email:['',Validators.required],
    password:['',Validators.required]


  })
  }
login()
{
  
  
              this.http.post('https://localhost:44319/api/login',{
                  Email:this.loginFormGroup.controls.email.value,
                  Password:this.loginFormGroup.controls.password.value
                
                }).subscribe(res=>{
                  this.result=res;
                
                  if(this.result==true)
                  {
                    this.router.navigate(['/customer']);
                  }
                  else
                  {
                    alert("Email or Password Wrong");
                  
                  }
                
                }              
                );

}
}