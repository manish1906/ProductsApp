import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
addproductFormGroup:FormGroup;
result:any;
  constructor(private formBuilder:FormBuilder,private router:Router,private http:HttpClient) { }
 
  ngOnInit() {
    this.addproductFormGroup=this.formBuilder.group({
      productName:['',Validators.required],
      productBrand:['',Validators.required],
      productPrice:['',Validators.required],
      productStatus:['',Validators.required],
      productDescription:['',Validators.required]


    })
  }
add()
{



 var status=parseInt(this.addproductFormGroup.controls.productStatus.value);
  var price=parseInt(this.addproductFormGroup.controls.productPrice.value);
  this.http.post('https://localhost:44319/api/product',{
    ProductName:this.addproductFormGroup.controls.productName.value,
    ProductBrand:this.addproductFormGroup.controls.productBrand.value,
    ProductPrice:price,
    ProductStatus:status ,
    ProductDescription :this.addproductFormGroup.controls.productDescription.value
   
   
  }).subscribe(res=>{this.result=res;
     
  });
  

  this.router.navigate(['/product']);
 


}
}
