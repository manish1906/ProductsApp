import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { FormGroup ,FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-user-product',
  templateUrl: './user-product.component.html',
  styleUrls: ['./user-product.component.css']
})
export class UserProductComponent implements OnInit {
 searchText: string;
  result:any;
  searchformGroup:FormGroup;
  // public pstatus=[{status:'Active'},{status:'InActive'}];
  constructor(private router:Router,private http:HttpClient,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.searchformGroup=this.formBuilder.group({

      search:'',
      filter:''
    })
    this.http.get<any>('https://localhost:44319/api/userlogin').subscribe(t => 
    
           { this.result = t;
            console.log(this.result);
           
            }
        );
        
  }
Search()
{
this.http.post('https://localhost:44319/api/search',{
    ProductName:this.searchformGroup.controls.search.value
   
  }).subscribe(res=>{this.result=res; 
  });
  

}


}
