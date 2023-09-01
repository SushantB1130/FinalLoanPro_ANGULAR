import { Component, OnInit } from '@angular/core';
import { LoanserviceService } from 'src/app/service/loanservice.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {

  constructor(private ls:LoanserviceService) {}

  customers:any[];

  
  customerstatus:string='DISBURSED';
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

  createLedger(customerId:number)
  {
    this.ls.initiateCPV(customerId).subscribe((data:any)=>{
      window.location.reload();
    })
  }


}
