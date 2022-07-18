import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullaccountComponent } from './fullaccount/fullaccount.component';
import { GetlistComponent } from './getlist/getlist.component';

 export const accountroutes: Routes = [
  {
    path:"",component:FullaccountComponent,
    children:[
      {
        path:"getlist",component:GetlistComponent
      }
    ]
  }
 ];

@NgModule({
  imports: [RouterModule.forChild(accountroutes)],
  exports: [RouterModule]
})
export class AccountdepartmentRoutingModule { }
