import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminmanagerloginComponent } from './adminmanagerlogin/adminmanagerlogin.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountdepartmentloginComponent } from './accountdepartmentlogin/accountdepartmentlogin.component';
import { SalesdepartmentloginComponent } from './salesdepartmentlogin/salesdepartmentlogin.component';
import { VerificationdepartmentloginComponent } from './verificationdepartmentlogin/verificationdepartmentlogin.component';
import { CreditDepartmentloginComponent } from './credit-departmentlogin/credit-departmentlogin.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegistercustomerComponent } from './registercustomer/registercustomer.component';
import { HttpClientModule } from '@angular/common/http';
 

 
 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminmanagerloginComponent,
    AccountdepartmentloginComponent,
    CustomerloginComponent,
    SalesdepartmentloginComponent,
    VerificationdepartmentloginComponent,
    CreditDepartmentloginComponent,
    RegistercustomerComponent,
   
    
 
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
