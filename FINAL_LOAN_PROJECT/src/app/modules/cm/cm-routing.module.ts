import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckApplicationComponent } from './check-application/check-application.component';
import { GenerateSanctionComponent } from './generate-sanction/generate-sanction.component';
import { SendMailCMComponent } from './send-mail-cm/send-mail-cm.component';

const routes: Routes = [
  {path:'checkAppl',component:CheckApplicationComponent},
  {path:'genSanction',component:GenerateSanctionComponent},
  {path:'sendMaiCM',component:SendMailCMComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmRoutingModule { }
