import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisbursedComponent } from './disbursed/disbursed.component';
import { LedgerComponent } from './ledger/ledger.component';
import { ReminderComponent } from './reminder/reminder.component';
import { DefaulterComponent } from './defaulter/defaulter.component';

const routes: Routes = [
  {path:'disb',component:DisbursedComponent},
  {path:'ledger',component:LedgerComponent},
  {path:'rem',component:ReminderComponent},
  {path:'default',component:DefaulterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
