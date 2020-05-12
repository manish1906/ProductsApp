import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule,Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { RegisterComponent } from './customer/register/register.component';
import { LoginComponent } from './customer/login/login.component';
import { ProductComponent } from './product/product.component';
import { UpdateComponent } from './customer/update/update.component';
import { AddproductComponent } from './product/addproduct/addproduct.component';
import { UpdateproductComponent } from './product/updateproduct/updateproduct.component';
import { UserComponent } from './user/user.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserupdateComponent } from './user/userupdate/userupdate.component';
import { UserProductComponent } from './user-product/user-product.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    RegisterComponent,
    LoginComponent,
    ProductComponent,
    UpdateComponent,
    AddproductComponent,
    UpdateproductComponent,
    UserComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserupdateComponent,
    UserProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule,ReactiveFormsModule,HttpModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
