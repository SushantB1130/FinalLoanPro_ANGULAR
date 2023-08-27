import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckApplicationComponent } from './check-application/check-application.component';
import { GenerateSanctionComponent } from './generate-sanction/generate-sanction.component';
import { SendMailCMComponent } from './send-mail-cm/send-mail-cm.component';
import { CPVComponent } from './cpv/cpv.component';
import { ApplicationFormComponent } from './application-form/application-form.component';


const routes: Routes = [
  {path:'checkAppl',component:CheckApplicationComponent},
  {path:'genSanction',component:GenerateSanctionComponent},
  {path:'sendMaiCM',component:SendMailCMComponent},
  {path:'cpv',component:CPVComponent},
  {path:'appliForm',component:ApplicationFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmRoutingModule { }
