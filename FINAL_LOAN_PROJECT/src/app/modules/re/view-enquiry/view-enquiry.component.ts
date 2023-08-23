import { Component, OnInit } from '@angular/core';
import { LoanserviceService } from 'src/app/service/loanservice.service';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  styleUrls: ['./view-enquiry.component.css']
})
export class ViewEnquiryComponent implements OnInit {

  constructor(private ls:LoanserviceService){}

  enquiries:any[] ;

  enquirystatus1:string='CREATED';
  enquirystatus2:string="no";

ngOnInit(): void {
  
  this.ls.getenquiry(this.enquirystatus1,this.enquirystatus2).subscribe((data:any)=>{
    console.log(data)
    this.enquiries=data.responsedata;
  })

}
sendtoOE(eid:number)
{
  this.ls.verifyenq(eid).subscribe((data:any)=>{
    window.location.reload();
  })
}

}
