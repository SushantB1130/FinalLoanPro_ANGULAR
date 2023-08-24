import { Component, OnInit } from '@angular/core';
import { LoanserviceService } from 'src/app/service/loanservice.service';

@Component({
  selector: 'app-check-cibil',
  templateUrl: './check-cibil.component.html',
  styleUrls: ['./check-cibil.component.css']
})
export class CheckCibilComponent  implements OnInit {

  constructor(private ls:LoanserviceService){}

  enquirystatus1:string="CIBIL_REQUIRED";
  enquirystatus2:string='no';

cstatus:boolean=false

  enquiries:any[];

  ngOnInit(): void {
    
    this.ls.getenquiry(this.enquirystatus1,this.enquirystatus2).subscribe((data:any)=>{
      this.enquiries=data.responsedata;
    })


  }
  getcibil(){
    
      this.cstatus=true;
      alert(this.cstatus);

  
  }

}
