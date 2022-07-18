import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { accountroutes } from './accountdepartment/accountdepartment-routing.module';
import { FullaccountComponent } from './accountdepartment/fullaccount/fullaccount.component';
import { AccountdepartmentloginComponent } from './accountdepartmentlogin/accountdepartmentlogin.component';
import { AdminmanagerloginComponent } from './adminmanagerlogin/adminmanagerlogin.component';
import { CreditDepartmentloginComponent } from './credit-departmentlogin/credit-departmentlogin.component';
import { CustomerloginComponent } from './customerlogin/customerlogin.component';

 
import { HeaderComponent } from './header/header.component';
import { RegistercustomerComponent } from './registercustomer/registercustomer.component';
import { SalesdepartmentloginComponent } from './salesdepartmentlogin/salesdepartmentlogin.component';
import { VerificationdepartmentloginComponent } from './verificationdepartmentlogin/verificationdepartmentlogin.component';
 

const routes: Routes = [
  {
    path:"",component:HeaderComponent
  },
  {
    path:"accountdepartmentlogin",component:AccountdepartmentloginComponent
  },
  {
    path:"fullaccount",
    loadChildren: () => import('./accountdepartment/accountdepartment.module').then(m => m.AccountdepartmentModule)
  },
  {
    path:"adminmanagerlogin",component:AdminmanagerloginComponent
  },
  {
    path:"fulladmin",
    loadChildren: () => import('./admindepartment/admindepartment.module').then(m => m.AdmindepartmentModule)
  },
  {
    path:"customerlogin",component:CustomerloginComponent
  },
  {
    path:"fullcustomer",
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule)

  },
  {
    path:'salesdepartmentlogin',component:SalesdepartmentloginComponent
  },
  {
    path:"fullsales",
    loadChildren: () => import('./salesdepartment/salesdepartment.module').then(m => m.SalesdepartmentModule)
  },
  {
    path:'verificationdepartmentlogin',component:VerificationdepartmentloginComponent
  },
  {
    path:"fullverification",
    loadChildren: () => import('./verificationdepartment/verificationdepartment.module').then(m => m.VerificationdepartmentModule)
  },
  {
    path:"creditdepartmentlogin",component:CreditDepartmentloginComponent
  },
  {
    path:"fullcredit",
    loadChildren: () => import('./credit-department/credit-department.module').then(m => m.CreditDepartmentModule)
  },
  {
    path:"registerCustomer",component:RegistercustomerComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
