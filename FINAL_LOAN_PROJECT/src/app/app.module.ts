import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './template/about-us/about-us.component';
import { AppHeaderComponent } from './template/app-header/app-header.component';
import { AppSideMenuComponent } from './template/app-side-menu/app-side-menu.component';
import { ContactUsComponent } from './template/contact-us/contact-us.component';
import { HeaderComponent } from './template/header/header.component';
import { AppDashBoardComponent } from './entry/app-dash-board/app-dash-board.component';
import { HomeComponent } from './entry/home/home.component';
import { LoginComponent } from './entry/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EnquiryComponent } from './template/enquiry/enquiry.component';
import { HomeLandingPageComponent } from './template/home-landing-page/home-landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    AppHeaderComponent,
    AppSideMenuComponent,
    ContactUsComponent,
    HeaderComponent,
    AppDashBoardComponent,
    HomeComponent,
    LoginComponent,
    EnquiryComponent,
    HomeLandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
