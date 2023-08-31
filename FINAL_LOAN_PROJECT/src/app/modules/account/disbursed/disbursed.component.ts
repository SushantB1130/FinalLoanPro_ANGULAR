import { Component, OnInit } from '@angular/core';
import { LoanserviceService } from 'src/app/service/loanservice.service';

@Component({
  selector: 'app-disbursed',
  templateUrl: './disbursed.component.html',
  styleUrls: ['./disbursed.component.css']
})
export class DisbursedComponent implements OnInit {

  constructor(private ls:LoanserviceService) {}

  customers:any[];

  
  customerstatus:string='SANCTIONED';
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

  disbursed(customerId:number)
  {
    this.ls.initiateCPV(customerId).subscribe((data:any)=>{
      window.location.reload();
    })
  }

}
