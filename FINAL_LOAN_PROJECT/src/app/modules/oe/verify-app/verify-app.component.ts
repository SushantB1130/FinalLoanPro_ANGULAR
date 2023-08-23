import { Component, OnInit } from '@angular/core';
import { LoanserviceService } from 'src/app/service/loanservice.service';

@Component({
  selector: 'app-verify-app',
  templateUrl: './verify-app.component.html',
  styleUrls: ['./verify-app.component.css']
})
export class VerifyAppComponent implements OnInit {

  constructor(private ls:LoanserviceService){}

  enquirystatus1:string="CIBIL_REQUIRED";
  enquirystatus2:string='no';

  enquiries:any[];

  ngOnInit(): void {
    
    this.ls.getenquiry(this.enquirystatus1,this.enquirystatus2).subscribe((data:any)=>{
      this.enquiries=data.responsedata;
    })
  }
}
