import { Component, OnInit } from '@angular/core';
import { LoanserviceService } from 'src/app/service/loanservice.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  constructor(private ls:LoanserviceService) {}

  customers:any[];

  
  customerstatus:string='INPROCESS';
  customerstatus2:string="no";

  ngOnInit(): void {
    
    this.getcustomers();
  }

  getcustomers()
  {
    this.ls.getcustomers(this.customerstatus,this.customerstatus2).subscribe((data:any)=>{
      this.customers=data.responsedata;
      
    })
  }

  initiatetCPV(customerId:number)
  {
    this.ls.initiateCPV(customerId).subscribe((data:any)=>{
      window.location.reload();
    })
  }
  viewpdf(customerId:number)
  {
    this.ls.viewpdf(customerId).subscribe((data:any)=>{
      
    })
  }

}


