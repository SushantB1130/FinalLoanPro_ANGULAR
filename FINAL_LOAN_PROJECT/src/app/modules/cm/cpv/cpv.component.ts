import { Component } from '@angular/core';
import { LoanserviceService } from 'src/app/service/loanservice.service';

@Component({
  selector: 'app-cpv',
  templateUrl: './cpv.component.html',
  styleUrls: ['./cpv.component.css']
})
export class CPVComponent {
  
  constructor(private ls:LoanserviceService){}

  customers:any[];

  
  customerstatus:string='VERIFICATION_STATE';
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

  verifycustomer(customerId:number)
  {
    this.ls.initiateCPV(customerId).subscribe((data:any)=>{
      window.location.reload();
  })
}
}
