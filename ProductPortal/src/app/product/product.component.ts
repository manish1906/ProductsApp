import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { FormGroup ,FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 searchText: string;
  result:any;
  searchformGroup:FormGroup;
  public pstatus=[{status:'Active'},{status:'InActive'}];
  constructor(private router:Router,private http:HttpClient,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.searchformGroup=this.formBuilder.group({

      search:'',
      filter:''
    })
    this.http.get<any>('https://localhost:44319/api/product').subscribe(t => 
    
           { this.result = t;
            console.log(this.result);
           
            }
        );
        
  }
delete(id:number )
{
this.http.delete('https://localhost:44319/api/product/'+id).subscribe(t => {
  this.result = t;
});
window.location.reload();

}
Search()
{
this.http.post('https://localhost:44319/api/search',{
    ProductName:this.searchformGroup.controls.search.value
   
  }).subscribe(res=>{this.result=res; 
  });
  

}
Filter()
{
this.http.post('https://localhost:44319/api/filter',{
    ProductStatus:this.searchformGroup.controls.filter.value
      }).subscribe(res=>{this.result=res;});
  

}

}
