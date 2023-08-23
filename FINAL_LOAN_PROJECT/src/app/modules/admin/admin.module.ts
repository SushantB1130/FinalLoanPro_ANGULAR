import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddusersComponent } from './addusers/addusers.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewusersComponent } from './viewusers/viewusers.component';


@NgModule({
  declarations: [
    AddusersComponent,
    ViewusersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
