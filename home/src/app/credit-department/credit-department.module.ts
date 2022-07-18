import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditDepartmentRoutingModule } from './credit-department-routing.module';
import { FullcreditComponent } from './fullcredit/fullcredit.component';
import { CreditSidebarComponent } from './credit-sidebar/credit-sidebar.component';
import { CreditHeaderComponent } from './credit-header/credit-header.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { CreditGetListComponent } from './credit-get-list/credit-get-list.component';
import { EditProfileComponent } from './credit-edit-profile/edit-profile.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FullcreditComponent,
    CreditSidebarComponent,
    CreditHeaderComponent,
    EmiCalculatorComponent,
    CreditGetListComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    CreditDepartmentRoutingModule,
    FormsModule
  ]
})
export class CreditDepartmentModule { }
