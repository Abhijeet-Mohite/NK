import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmindepartmentRoutingModule } from './admindepartment-routing.module';
import { FulladminComponent } from './fulladmin/fulladmin.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { EnquiryListComponent } from './enquiry-list/enquiry-list.component';
import { LoanApplicationListComponent } from './loan-application-list/loan-application-list.component';
import { RegisterCustomerListComponent } from './register-customer-list/register-customer-list.component';
import { AdminDepartmentEmployeeComponent } from './admin-department-employee/admin-department-employee.component';
import { SalesDepartmentEmployeeComponent } from './sales-department-employee/sales-department-employee.component';
import { AccountDepartmentEmployeeComponent } from './account-department-employee/account-department-employee.component';
import { DocumentVerificationDepartmentEmployeeComponent } from './document-verification-department-employee/document-verification-department-employee.component';
import { CreditDepartmentEmployeeComponent } from './credit-department-employee/credit-department-employee.component';


@NgModule({
  declarations: [
    FulladminComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    EnquiryListComponent,
    LoanApplicationListComponent,
    RegisterCustomerListComponent,
    AdminDepartmentEmployeeComponent,
    SalesDepartmentEmployeeComponent,
    AccountDepartmentEmployeeComponent,
    DocumentVerificationDepartmentEmployeeComponent,
    CreditDepartmentEmployeeComponent
  ],
  imports: [
    CommonModule,
    AdmindepartmentRoutingModule
  ]
})
export class AdmindepartmentModule { }
