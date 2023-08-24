import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { LoanserviceService } from 'src/app/service/loanservice.service';

@Component({
  selector: 'app-add-enquiry',
  templateUrl: './add-enquiry.component.html',
  styleUrls: ['./add-enquiry.component.css']
})
export class AddEnquiryComponent implements OnInit {

  
constructor(private ls:LoanserviceService,private fb:FormBuilder){}

  enquiryForm:FormGroup;

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

  this.ls.addenquiry(this.enquiryForm.value).subscribe((data:any[])=>{
    
    this.resetform();
    alert("data save succefully");
  });

}

resetform()
{
  this.enquiryForm.reset();
}







}
  





