import { Component,OnInit } from '@angular/core';

import { LoanserviceService } from 'src/app/service/loanservice.service';

@Component({
  selector: 'app-check-application',
  templateUrl: './check-application.component.html',
  styleUrls: ['./check-application.component.css']
})
export class CheckApplicationComponent implements OnInit {

  constructor(private ls:LoanserviceService) {}

  enquiries:any[];

  
  enquirystatus1:string='CREATED';
  enquirystatus2:string="no";
  ngOnInit(): void {
    
    this.ls.getenquiry(this.enquirystatus1,this.enquirystatus2).subscribe((data:any)=>{
      this.enquiries=data.responsedata;
    })
  }



}


