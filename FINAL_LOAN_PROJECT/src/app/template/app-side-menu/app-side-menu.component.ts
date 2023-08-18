import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRoles } from 'src/app/model/user-roles';

@Component({
  selector: 'app-app-side-menu',
  templateUrl: './app-side-menu.component.html',
  styleUrls: ['./app-side-menu.component.css']
})
export class AppSideMenuComponent implements OnInit{

  menus:any[];
  userType:string;

  constructor(private router:Router){}

  ngOnInit(): void 
  {
    this.userType=localStorage.getItem('userType');
        this.menus=UserRoles.userRoles;
        console.log(this.menus[0]['re'])
  }
  
  navigateTo(path:String)
  {
    this.router.navigateByUrl('/dash/'+this.userType+"/"+path)
  }

}
