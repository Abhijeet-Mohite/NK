import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyForLoanComponent } from './sales-apply-for-loan/apply-for-loan.component';
import { FullsalesComponent } from './fullsales/fullsales.component';
import { EligibalCasesComponent } from './eligibal-cases/eligibal-cases.component';
import { NonEligibalCasesComponent } from './non-eligibal-cases/non-eligibal-cases.component';
import { CustomerRequestListComponent } from './customer-request-list/customer-request-list.component';

const routes: Routes = [
  {
    path:'',component:FullsalesComponent,
    children:[
      {
        path:'applyforloan',component:ApplyForLoanComponent
      },
      {
        path:'eligiblecases',component:EligibalCasesComponent
      },{
        path:'noneligiblecases',component:NonEligibalCasesComponent
      },{
        path:'customerrequestlist',component:CustomerRequestListComponent
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesdepartmentRoutingModule { }
