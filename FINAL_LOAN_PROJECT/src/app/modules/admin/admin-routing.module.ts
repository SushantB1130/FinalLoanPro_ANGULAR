import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddusersComponent } from './addusers/addusers.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { SendMailComponent } from '../oe/send-mail/send-mail.component';
import { SendmailComponent } from './sendmail/sendmail.component';
import { SaleschartComponent } from './saleschart/saleschart.component';

const routes: Routes = [
  {path:"addusers",component:AddusersComponent},
  {path:"viewusers",component:ViewusersComponent},
  {path:"sendmail",component:SendmailComponent},
  {path:'sales',component:SaleschartComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
