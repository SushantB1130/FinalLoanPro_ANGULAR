import { Component, OnInit } from '@angular/core';
import { LoanserviceService } from 'src/app/service/loanservice.service';

@Component({
  selector: 'app-generate-sanction',
  templateUrl: './generate-sanction.component.html',
  styleUrls: ['./generate-sanction.component.css']
})
export class GenerateSanctionComponent implements OnInit {

  constructor(private ls:LoanserviceService) {}

  customers:any[];

  
  customerstatus:string='VERIFICATION_DONE';
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
  
  sanctioned(customerId:number)
  {
    this.ls.initiateCPV(customerId).subscribe((data:any)=>{
      window.location.reload();
    })
  }

}
