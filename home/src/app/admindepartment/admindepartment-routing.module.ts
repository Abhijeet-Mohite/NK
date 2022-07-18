import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDepartmentEmployeeComponent } from './account-department-employee/account-department-employee.component';
import { AdminDepartmentEmployeeComponent } from './admin-department-employee/admin-department-employee.component';
import { CreditDepartmentEmployeeComponent } from './credit-department-employee/credit-department-employee.component';
import { DocumentVerificationDepartmentEmployeeComponent } from './document-verification-department-employee/document-verification-department-employee.component';
import { EnquiryListComponent } from './enquiry-list/enquiry-list.component';
import { FulladminComponent } from './fulladmin/fulladmin.component';
import { LoanApplicationListComponent } from './loan-application-list/loan-application-list.component';
import { RegisterCustomerListComponent } from './register-customer-list/register-customer-list.component';
import { SalesDepartmentEmployeeComponent } from './sales-department-employee/sales-department-employee.component';

const routes: Routes = [
  {
    path:'',component:FulladminComponent,
    children:[
      {
        path:'enquirylist' ,component:EnquiryListComponent
      },
      {
        path:'loanapplicationlist',component:LoanApplicationListComponent
      },
      {
        path:'registercustomer' ,component:RegisterCustomerListComponent
      },
      {
        path:'admindepartmentemployee',component:AdminDepartmentEmployeeComponent
      },
      {
        path:'salesdepartmentemployee',component:SalesDepartmentEmployeeComponent
      },
      {
        path:'accountdepartmentemployee',component:AccountDepartmentEmployeeComponent
      },
      {
        path:'documentverificationemployee',component:DocumentVerificationDepartmentEmployeeComponent
      },
      {
        path:'creditdepartmentemployee',component:CreditDepartmentEmployeeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmindepartmentRoutingModule { }
