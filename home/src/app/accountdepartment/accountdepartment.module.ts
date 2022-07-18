import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountdepartmentRoutingModule } from './accountdepartment-routing.module';

import { FullaccountComponent } from './fullaccount/fullaccount.component';
import { GetlistComponent } from './getlist/getlist.component';
import { AccountheaderComponent } from './accountheader/accountheader.component';
import { AccountsidebarComponent } from './accountsidebar/accountsidebar.component';


@NgModule({
  declarations: [
   
    FullaccountComponent,
        GetlistComponent,
        AccountheaderComponent,
        AccountsidebarComponent
  ],
  imports: [
    CommonModule,
    AccountdepartmentRoutingModule
  ]
})
export class AccountdepartmentModule { }
