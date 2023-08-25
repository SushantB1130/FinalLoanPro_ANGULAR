import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoanserviceService } from 'src/app/service/loanservice.service';


@Component({
  selector: 'app-send-mail-cm',
  templateUrl: './send-mail-cm.component.html',
  styleUrls: ['./send-mail-cm.component.css']
})
export class SendMailCMComponent implements OnInit{

  constructor(private fb:FormBuilder,private ls:LoanserviceService)
  {
  
  }
    mailDetailsForm!: FormGroup;
  
  attachment:any;
  
  reader=new FileReader();
  attachm:any;
  
  ngOnInit(): void 
  {
    this.mailDetailsForm=this.fb.group(
      {
        toMail:[],
        text:[],
        subject:[]
  
      }
    )
  }
  
  onSelectAttachment(event:any)
  {
    this.attachment=event.target.files[0];
    this.reader.onload=e=>this.attachm=this.reader.result;
    this.reader.readAsDataURL(this.attachment);
  }
  
  onSubmitSendMail()
  {
   const formData=new FormData();
   let mailstring=JSON.stringify(this.mailDetailsForm.value);
  
   formData.append("mail",mailstring);
   formData.append("attach",this.attachment);
   alert(mailstring);
  
this.ls.sendMail(formData).subscribe((data:any)=>{
 
});
  
   alert("Mail Sent");
  }

}
