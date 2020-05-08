import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { RegisterComponent } from './customer/register/register.component';
import { LoginComponent } from './customer/login/login.component';
import { ProductComponent } from './product/product.component';
import { UpdateComponent } from './customer/update/update.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { UpdateproductComponent } from './product/updateproduct/updateproduct.component';

const routes: Routes = [
  
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register' ,component: RegisterComponent },
{ path: 'product' ,component: ProductComponent },
{ path: 'customer' ,component: CustomerComponent },
{ path: 'updatecustomer/:customerCode/:firstName/:lastName/:email/:mobileNumber/:gender/:dob/:address' ,component: UpdateComponent },
{ path: 'addproduct' ,component: AddproductComponent },
{ path: 'updateproduct/:productCode/:productName/:productBrand/:productPrice/:productStatus' ,component: UpdateproductComponent }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
