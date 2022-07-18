import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';

import { ApplyForLoanComponent } from './apply-for-loan/apply-for-loan.component';
import { RequiredDocumentsListComponent } from './required-documents-list/required-documents-list.component';
import { TrackLoanRequestComponent } from './track-loan-request/track-loan-request.component';
import { FullcustomerComponent } from './fullcustomer/fullcustomer.component';
import { HeaderComponent } from './customer-header/header.component';
import { SidebarComponent } from './customer-sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    
    ApplyForLoanComponent,
    RequiredDocumentsListComponent,
    TrackLoanRequestComponent,
    FullcustomerComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
