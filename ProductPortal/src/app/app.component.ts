import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProductPortal';
 //display:boolean=true;
 //loginFormGroup:FormGroup;
  result:any;
 logout()
 {
//this.display=false;
   sessionStorage.removeItem("key");
 }
 }
