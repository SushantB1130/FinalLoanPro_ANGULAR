import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { DisbursedComponent } from './disbursed/disbursed.component';
import { LedgerComponent } from './ledger/ledger.component';
import { ReminderComponent } from './reminder/reminder.component';
import { DefaulterComponent } from './defaulter/defaulter.component';


@NgModule({
  declarations: [
    DisbursedComponent,
    LedgerComponent,
    ReminderComponent,
    DefaulterComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule
  ]
})
export class AccountModule { }
