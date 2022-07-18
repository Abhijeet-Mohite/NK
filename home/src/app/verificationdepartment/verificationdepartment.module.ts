import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerificationdepartmentRoutingModule } from './verificationdepartment-routing.module';
import { FullverificationComponent } from './fullverification/fullverification.component';
import { VerificationSidebarComponent } from './verification-sidebar/verification-sidebar.component';
import { VerificationHeaderComponent } from './verification-header/verification-header.component';
import { VerificationGetlistComponent } from './verification-getlist/verification-getlist.component';


@NgModule({
  declarations: [
    FullverificationComponent,
    VerificationSidebarComponent,
    VerificationHeaderComponent,
    VerificationGetlistComponent
  ],
  imports: [
    CommonModule,
    VerificationdepartmentRoutingModule
  ]
})
export class VerificationdepartmentModule { }
