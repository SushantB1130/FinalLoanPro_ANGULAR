import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckCibilComponent } from './check-cibil/check-cibil.component';
import { VerifyAppComponent } from './verify-app/verify-app.component';
import { SendMailComponent } from './send-mail/send-mail.component';

const routes: Routes = [
  {
    path:'viewenquiry',component:CheckCibilComponent
  },
  {
    path:'verifyApp',component:VerifyAppComponent
  },
  {path:'sendMailOe', component:SendMailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OeRoutingModule { }
