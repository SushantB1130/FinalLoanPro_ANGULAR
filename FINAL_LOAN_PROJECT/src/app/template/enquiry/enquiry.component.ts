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
  this.enquiryForm.reset;
}




}
