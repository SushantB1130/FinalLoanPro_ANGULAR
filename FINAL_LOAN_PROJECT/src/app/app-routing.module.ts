import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './entry/home/home.component';
import { AboutUsComponent } from './template/about-us/about-us.component';
import { ContactUsComponent } from './template/contact-us/contact-us.component';
import { LoginComponent } from './entry/login/login.component';
import { AppDashBoardComponent } from './entry/app-dash-board/app-dash-board.component';
import { EnquiryComponent } from './template/enquiry/enquiry.component';
import { HomeLandingPageComponent } from './template/home-landing-page/home-landing-page.component';

const routes: Routes = [
  {
    path: '', component:HomeComponent, children:[
                                                  {path:'', component:HomeLandingPageComponent},
                                                  {path:'about',component:AboutUsComponent},
                                                  {path:'contact',component:ContactUsComponent},
                                                  {path:'login',component:LoginComponent},
                                                  {path:'enquiry',component:EnquiryComponent}
                                                  
                                                ]
  },
  {
    path:'dash', component:AppDashBoardComponent, children:[

                  { path:'oe', loadChildren:()=>import('src/app/modules/oe/oe.module').then(e=>e.OeModule)},
                  {path: 're',loadChildren:()=>import('src/app/modules/re/re.module').then(e=>e.ReModule)},
                  {path: 'admin',loadChildren:()=>import('src/app/modules/admin/admin.module').then(e=>e.AdminModule)}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
