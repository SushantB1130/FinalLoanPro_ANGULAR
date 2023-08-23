import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OeRoutingModule } from './oe-routing.module';
import { CheckCibilComponent } from './check-cibil/check-cibil.component';
import { VerifyAppComponent } from './verify-app/verify-app.component';
import { SendMailComponent } from './send-mail/send-mail.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CheckCibilComponent,
    VerifyAppComponent,
    SendMailComponent
  ],
  imports: [
    CommonModule,
    OeRoutingModule,
    ReactiveFormsModule
  ]
})
export class OeModule { }
