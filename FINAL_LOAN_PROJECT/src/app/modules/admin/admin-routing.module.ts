import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddusersComponent } from './addusers/addusers.component';
import { ViewusersComponent } from './viewusers/viewusers.component';

const routes: Routes = [
  {path:"addusers",component:AddusersComponent},
  {path:"viewusers",component:ViewusersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
