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



  addressproof!:any;
  aadharImage!:any;
  panImage!:any;
  photo!:any;
  signature!:any;
  slip!:any;
  reader=new FileReader();

  addproofimg:any;
  aadharimg:any;
  panimg:any;
  phtoimg:any;
  signatureimg:any;
  slipimg:any;

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
        customerState: []
      }),
        profession: this.fb.group({
          professionType: [],
          companyname: []
        }),
          currentLoanDetails: this.fb.group({
            loanAmount: [],
            rateOfInterest: [],
            tenure: [],
            totalAmountToBePaidDouble: [],
            processingFees: [],
            totalInterest: [],
            emiAmountMonthly: []
         
          }),
              accountDetails: this.fb.group({
                accounType: [],
                accountHolderName: [],
                accountNumber: [],
                bankname: []
              }),
                gurantorDetails: this.fb.group({
                  guarantorName: [],
                  guarantorRelationshipWithCustomer: [],
                  guarantorAadharCardNumber: []
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
  onselectaddressproof(event:any)
  {
    this.addressproof=event.target.files[0];
    this.reader.onload=e=>this.addproofimg=this.reader.result;
    this.reader.readAsDataURL(this.addressproof);
  }
  onselectpan(event:any){

    this.panImage=event.target.files[0];
    this.reader.onload=e=>this.panimg=this.reader.result;
    this.reader.readAsDataURL(this.panImage);
  }
  onselectadhar(event:any)
  {
    this.aadharImage=event.target.files[0];
    this.reader.onload=e=>this.aadharimg=this.reader.result;
    this.reader.readAsDataURL(this.aadharImage);
  }
  onselectphoto(event:any)
  {
    this.photo=event.target.files[0];
    this.reader.onload=e=>this.phtoimg=this.reader.result;
    this.reader.readAsDataURL(this.photo);
  }
  onselectsignature(event:any)
  {
    this.signature=event.target.files[0];
    this.reader.onload=e=>this.signatureimg=this.reader.result;
    this.reader.readAsDataURL(this.signature);
  }
  onselectslip(event:any)
  {
    this.slip=event.target.files[0];
    this.reader.onload=e=>this.slipimg=this.reader.result;
    this.reader.readAsDataURL(this.slip);
  }

  addcustomer()
  {

    const formdata=new FormData();
    let customerJson=JSON.stringify(this.cpvform.value);

    formdata.append("customer", customerJson);
    formdata.append("addressproof", this.addressproof);
    formdata.append("panCard", this.panImage);
    formdata.append("addharCard", this.aadharImage);
    formdata.append("photo", this.photo);
    formdata.append("signature", this.signature);
    formdata.append("salarySlips", this.slip);

    this.ls.addcustomer(formdata).subscribe((data:any)=>{
      alert("cust add");
      window.location.reload();
    })
  }


  public amount:number;
  public tenure:number;
  public interest:number;

  public totalinterestonamt:number; 
  public finalamt:number=0;

  public oneyearint:number;

  public onemonthint:number;

  public emi:number;

  public processingFees=500;

  totalamountpayable:number;

  Emical()
  {
    
    if(this.tenure==12)
    {
      alert(this.tenure);
      this.interest=5;
      this.totalinterestonamt=this.amount*this.interest/100;
      this.finalamt=this.amount+this.totalinterestonamt;
      this.emi=this.finalamt/this.tenure;
      this.totalamountpayable=this.emi*this.tenure;
    }
    else if(this.tenure==24)
    {
      alert(this.tenure+"in 24");
      this.interest=7;
      this.oneyearint=this.amount*this.interest/100;
      this.onemonthint=this.oneyearint/12;
      this.totalinterestonamt=this.onemonthint*this.tenure;
      this.finalamt=this.amount+this.totalinterestonamt;
      this.emi=this.finalamt/this.tenure;
      this.totalamountpayable=this.emi*this.tenure;
    }
    else if(this.tenure==36)
    {
      alert(this.tenure+"in 36");
      this.interest=9;
      this.oneyearint=this.amount*this.interest/100;
      this.onemonthint=this.oneyearint/12;
      this.totalinterestonamt=this.onemonthint*this.tenure;
      this.finalamt=this.amount+this.totalinterestonamt;
      this.emi=this.finalamt/this.tenure;
      this.totalamountpayable=this.emi*this.tenure;
    }
    else if(this.tenure==48)
    {
      alert(this.tenure+"in 48");
      this.interest=11;
      this.oneyearint=this.amount*this.interest/100;
      this.onemonthint=this.oneyearint/12;
      this.totalinterestonamt=this.onemonthint*this.tenure;
      this.finalamt=this.amount+this.totalinterestonamt;
      this.emi=this.finalamt/this.tenure;
      this.totalamountpayable=this.emi*this.tenure;
    }
  }

}








  