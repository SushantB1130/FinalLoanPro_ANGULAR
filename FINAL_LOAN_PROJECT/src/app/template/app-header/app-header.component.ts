import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit{

  userType:string;

  ngOnInit(): void 
  {
    let ut:string=localStorage.getItem("userType");
    if(ut=='re')
    {
      this.userType='Relationship Executive' 
    }
    else if(ut=='oe')
    {
      this.userType='Operational Executive'
    }
  }

}
