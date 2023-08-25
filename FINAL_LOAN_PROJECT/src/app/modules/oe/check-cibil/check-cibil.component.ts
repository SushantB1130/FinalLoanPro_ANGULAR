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
  enquirystatus2:string='CIBIL_CHECKED';

  cibilscore:number;

cstatus:boolean=false
cibil:number=0;

  enquiries:any[];

  ngOnInit(): void {
    
  this.getData();

  }
  getData()
  {
    
    this.ls.getenquiry(this.enquirystatus1,this.enquirystatus2).subscribe((data:any)=>{
      this.enquiries=data.responsedata;
    })
  }
  getcibil(e:any){
    

      this.ls.getcibil(e).subscribe((data:any)=>{

      })
      window.location.reload();
      this.getData();
     
  }
  sendtocredit(eid:number)
  {
    this.ls.verifyenq(eid).subscribe((data:any)=>{
      window.location.reload();
    });
  }

}
