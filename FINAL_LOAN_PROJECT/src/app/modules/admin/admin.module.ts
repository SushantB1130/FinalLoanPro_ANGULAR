import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddusersComponent } from './addusers/addusers.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewusersComponent } from './viewusers/viewusers.component';
import { SendmailComponent } from './sendmail/sendmail.component';
import { SaleschartComponent } from './saleschart/saleschart.component';


@NgModule({
  declarations: [
    AddusersComponent,
    ViewusersComponent,
    SendmailComponent,
    SaleschartComponent,
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
