import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmRoutingModule } from './cm-routing.module';
import { CheckApplicationComponent } from './check-application/check-application.component';
import { GenerateSanctionComponent } from './generate-sanction/generate-sanction.component';
import { SendMailCMComponent } from './send-mail-cm/send-mail-cm.component';

import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { CPVComponent } from './cpv/cpv.component';
import {MatExpansionModule} from '@angular/material/expansion';
@NgModule({
  declarations: [
    CheckApplicationComponent,
    GenerateSanctionComponent,
    SendMailCMComponent,
    ApplicationFormComponent,
    CPVComponent,
    
  ],
  imports: [
    CommonModule,
    CmRoutingModule,
    ReactiveFormsModule,
    MatButtonModule, MatDividerModule, MatIconModule,MatExpansionModule
   
  ]
})
export class CmModule { }
