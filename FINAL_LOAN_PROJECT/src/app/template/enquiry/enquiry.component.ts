import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoanserviceService } from 'src/app/service/loanservice.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit {

constructor(private ls:LoanserviceService,private fb:FormBuilder){}

enquiryForm:FormGroup;
respostatus:number=0;
spinner:boolean=false;

  ngOnInit(): void {
  
    this.enquiryForm=this.fb.group({
      firstName:[],
      lastName:[],
      age:[],
      email:[],
      mobileNumber:[],
      pancardNumber:[]
    })

  }


addenquiry()
{
  this.spinner=true;
  this.ls.addenquiry(this.enquiryForm.value).subscribe((data:any)=>{
    alert(data.responsemsg);
    this.spinner=false;
    this.resetform();
   
  });

}

resetform()
{
  this.enquiryForm.reset();
}

}
