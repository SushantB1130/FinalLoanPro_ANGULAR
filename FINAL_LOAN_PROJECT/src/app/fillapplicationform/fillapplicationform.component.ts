import { Component,OnInit } from '@angular/core';
import { LoanserviceService } from '../service/loanservice.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fillapplicationform',
  templateUrl: './fillapplicationform.component.html',
  styleUrls: ['./fillapplicationform.component.css']
})
export class FillapplicationformComponent implements OnInit {

  cpvform: FormGroup;

ngOnInit(): void {
  this.enquiries=null;
  this.openmyform();
}
  
  constructor(private ls:LoanserviceService,private fb: FormBuilder){}

  invalidtext=false;
  enquiries:any;
  pancardNumber:string;
  panelOpenState = false;
  formvalue=false;
  enquiryrow=false;

  openmyform()
  {
    this.cpvform = this.fb.group({
      customerName: [],
      customerDateOfBirth: [],
      customerAge: [],
      customerGender: [],
      customerEmail: [],
      customerMobileNumber: [],
      customerTotalLoanRequired: [],

      customerAddress: this.fb.group({
        customerCityname: [],
        customerDistrict: [],
        customerState: [],

        profession: this.fb.group({
          professionType: [],
          companyname: [],

          currentLoanDetails: this.fb.group({
            loanAmount: [],
            rateOfInterest: [],
            tenure: [],
            totalAmountToBePaidDouble: [],
            processingFees: [],
            totalInterest: [],

            emiDetails: this.fb.group({
              emiAmountMonthly: [],

              accountDetails: this.fb.group({
                accounType: [],
                accountHolderName: [],
                accountNumber: [],
                bankname: [],

                gurantorDetails: this.fb.group({
                  guarantorName: [],
                  guarantorRelationshipWithCustomer: [],
                  guarantorAadharCardNumber: []
                })

              })

            })
          })
        })



      })



    })
  }

  showform()
  {

this.ls.getsingleenq(this.pancardNumber).subscribe((data:any)=>{

if(data.responsedata.pancardNumber==this.pancardNumber)
{
  this.enquiries=data.responsedata;
  this.formvalue=true;
  this.enquiryrow=true;
}
else{
  this.invalidtext=true;


}

})

   
  }
}








  