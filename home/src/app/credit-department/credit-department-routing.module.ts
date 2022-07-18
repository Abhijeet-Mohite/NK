import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditGetListComponent } from './credit-get-list/credit-get-list.component';
import { EditProfileComponent } from './credit-edit-profile/edit-profile.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { FullcreditComponent } from './fullcredit/fullcredit.component';



const routes: Routes = [
  {
    path:'',component:FullcreditComponent,
    children:[
      {
        path:'emicalculator',component:EmiCalculatorComponent
      },
      {
        path:'creditgetlist',component:CreditGetListComponent
      },
      {
        path:'crediteditprofile',component:EditProfileComponent
      }
    ]
  }
    
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditDepartmentRoutingModule { }
