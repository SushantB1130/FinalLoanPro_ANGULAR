import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRoles } from 'src/app/model/user-roles';
import { LoanserviceService } from 'src/app/service/loanservice.service';

@Component({
  selector: 'app-app-side-menu',
  templateUrl: './app-side-menu.component.html',
  styleUrls: ['./app-side-menu.component.css']
})
export class AppSideMenuComponent implements OnInit{

  menus:any[];
  userType:string;
  proimg:any;
  profile:any;
  userdata:any;

  reader=new FileReader();

  constructor(private router:Router,private ls:LoanserviceService){}

  ngOnInit(): void 
  {
    this.userType=localStorage.getItem('userType');
        this.menus=UserRoles.userRoles;
        this.ls.getsingleuser(this.userType).subscribe((data:any)=>{
          this.userdata=data.responsedata;
          this.proimg=data.responsedata.profilephoto;
          this.reader.onload=e=>this.profile=this.reader.result;
          this.reader.readAsDataURL(this.proimg);
        })

  }
  
  navigateTo(path:String)
  {
    this.router.navigateByUrl('/dash/'+this.userType+"/"+path)
  }
  clearUser()
  {
    localStorage.clear();
  }
}
