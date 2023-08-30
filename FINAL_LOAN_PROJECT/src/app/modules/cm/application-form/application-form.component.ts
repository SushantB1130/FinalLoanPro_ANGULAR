import { Component, OnInit } from '@angular/core';
import { LoanserviceService } from 'src/app/service/loanservice.service';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  constructor(private ls:LoanserviceService) {}

  enquiries:any[];

  
  enquirystatus1:string='CIBIL_CHECKED';
  enquirystatus2:string="no";
  ngOnInit(): void {
    
    this.ls.getenquiry(this.enquirystatus1,this.enquirystatus2).subscribe((data:any)=>{
      this.enquiries=data.responsedata;
      console.log(data)
    })
  }
  approvedcase(eid:number)
  {
    this.ls.verifyenq(eid).subscribe((data:any)=>{
      window.location.reload();
    })
  }
  rejectedcase(eid:number){

    this.ls.verifyenq(eid).subscribe((data:any)=>{
      window.location.reload();
    })
  }


}


