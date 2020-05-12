import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { RegisterComponent } from './customer/register/register.component';
import { LoginComponent } from './customer/login/login.component';
import { ProductComponent } from './product/product.component';
import { UpdateComponent } from './customer/update/update.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { UpdateproductComponent } from './product/updateproduct/updateproduct.component';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserupdateComponent } from './user/userupdate/userupdate.component';
import { UserProductComponent } from './user-product/user-product.component';
const routes: Routes = [
  
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register' ,component: RegisterComponent },
{ path: 'product' ,component: ProductComponent },
{ path: 'customer' ,component: CustomerComponent },
{ path: 'updatecustomer/:customerCode/:firstName/:lastName/:email/:mobileNumber/:gender/:dob/:address' ,component: UpdateComponent },
{ path: 'addproduct' ,component: AddproductComponent },
{ path: 'updateproduct/:productCode/:productName/:productBrand/:productPrice/:productDescription/:productStatus' ,component: UpdateproductComponent },
{ path: 'userlogin' ,component: UserLoginComponent },
{ path: 'user' ,component: UserComponent },
{ path: 'updateuser/:customerCode/:firstName/:lastName/:email/:mobileNumber/:gender/:dob/:address' ,component:UserupdateComponent  },
{ path: 'userregister' ,component: UserRegisterComponent },
{ path: 'userproduct' ,component: UserProductComponent }


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
