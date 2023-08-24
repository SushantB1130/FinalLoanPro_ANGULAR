import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmRoutingModule } from './cm-routing.module';
import { CheckApplicationComponent } from './check-application/check-application.component';
import { GenerateSanctionComponent } from './generate-sanction/generate-sanction.component';
import { SendMailCMComponent } from './send-mail-cm/send-mail-cm.component';


@NgModule({
  declarations: [
    CheckApplicationComponent,
    GenerateSanctionComponent,
    SendMailCMComponent
  ],
  imports: [
    CommonModule,
    CmRoutingModule
  ]
})
export class CmModule { }
