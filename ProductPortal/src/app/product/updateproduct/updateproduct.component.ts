import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  productCode:any;
  result:any;
  productName:string;
      productBrand:string;
      productPrice:any;
      productStatus:any;
productDescription:any;
updateproductFormGroup:FormGroup;
  constructor(private formBuilder:FormBuilder,private router:Router,private http:HttpClient,private activateRoute:ActivatedRoute) { }
 
  ngOnInit() {
     this.productCode=this.activateRoute.snapshot.paramMap.get("productCode");
    this.productName=this.activateRoute.snapshot.paramMap.get("productName");
    this.productBrand=this.activateRoute.snapshot.paramMap.get("productBrand");
    this.productPrice=this.activateRoute.snapshot.paramMap.get("productPrice");
    this.productStatus=this.activateRoute.snapshot.paramMap.get("productStatus");
     this.productDescription=this.activateRoute.snapshot.paramMap.get("productDescription");
   
  
    this.updateproductFormGroup=this.formBuilder.group({
      productName:[this.productName,Validators.required],
      productBrand:[this.productBrand,Validators.required],
      productPrice:[this.productPrice,Validators.required],
      productStatus:[this.productStatus,Validators.required],
      productDescription:[this.productDescription,Validators.required]

    })
  }
update()
{
 var status=parseInt(this.updateproductFormGroup.controls.productStatus.value);
 var price=parseInt(this.updateproductFormGroup.controls.productPrice.value);
  this.http.put('https://localhost:44319/api/product',{
    ProductCode:parseInt(this.productCode),
    ProductName:this.updateproductFormGroup.controls.productName.value,
    ProductBrand:this.updateproductFormGroup.controls.productBrand.value,
    ProductPrice:price,
    ProductStatus:status , 
   ProductDescription:this.updateproductFormGroup.controls.productDescription.value
   
  }).subscribe(res=>{this.result=res;    
  
  });
  

  this.router.navigate(['/product']);
 


}

}
