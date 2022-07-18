import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyForLoanComponent } from './apply-for-loan/apply-for-loan.component';
import { FullcustomerComponent } from './fullcustomer/fullcustomer.component';
import { RequiredDocumentsListComponent } from './required-documents-list/required-documents-list.component';
import { TrackLoanRequestComponent } from './track-loan-request/track-loan-request.component';

const routes: Routes = [
  {
    path:'',component:FullcustomerComponent,
    children:[
      {
        path:'applyforloan', component:ApplyForLoanComponent
      },
      {
        path:'requireddocuments',component:RequiredDocumentsListComponent
      },
      {
        path:'trackloan',component:TrackLoanRequestComponent
      }
    ]
  }

    ];
  


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
