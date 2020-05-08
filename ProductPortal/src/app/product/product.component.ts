import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient,HttpClientModule} from '@angular/common/http';
  

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
 searchText: string;
  result:any;
  constructor(private router:Router,private http:HttpClient) { }

  ngOnInit() {
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

}
