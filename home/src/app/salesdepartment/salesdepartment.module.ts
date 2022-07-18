import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesdepartmentRoutingModule } from './salesdepartment-routing.module';
import { FullsalesComponent } from './fullsales/fullsales.component';
import { ApplyForLoanComponent } from './sales-apply-for-loan/apply-for-loan.component';
import { EligibalCasesComponent } from './eligibal-cases/eligibal-cases.component';
import { NonEligibalCasesComponent } from './non-eligibal-cases/non-eligibal-cases.component';
import { CustomerRequestListComponent } from './customer-request-list/customer-request-list.component';
import { SalesHeaderComponent } from './sales-header/sales-header.component';
import { SalesSidebarComponent } from './sales-sidebar/sales-sidebar.component';


@NgModule({
  declarations: [
    FullsalesComponent,
    ApplyForLoanComponent,
    EligibalCasesComponent,
    NonEligibalCasesComponent,
    CustomerRequestListComponent,
    SalesHeaderComponent,
    SalesSidebarComponent
  ],
  imports: [
    CommonModule,
    SalesdepartmentRoutingModule
  ]
})
export class SalesdepartmentModule { }
