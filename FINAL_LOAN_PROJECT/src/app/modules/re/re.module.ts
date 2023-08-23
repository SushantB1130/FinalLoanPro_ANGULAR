import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReRoutingModule } from './re-routing.module';
import { SendMailComponent } from './send-mail/send-mail.component';
import { AddEnquiryComponent } from './add-enquiry/add-enquiry.component';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SendMailComponent,
    AddEnquiryComponent,
    ViewEnquiryComponent
  ],
  imports: [
    CommonModule,
    ReRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReModule { }
