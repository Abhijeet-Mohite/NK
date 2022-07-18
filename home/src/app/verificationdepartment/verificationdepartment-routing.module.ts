import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullverificationComponent } from './fullverification/fullverification.component';
import { VerificationGetlistComponent } from './verification-getlist/verification-getlist.component';

const routes: Routes = [
  {
    path:'',component:FullverificationComponent,
    children:[
      {
        path:'verificationgetlist',component:VerificationGetlistComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VerificationdepartmentRoutingModule { }
