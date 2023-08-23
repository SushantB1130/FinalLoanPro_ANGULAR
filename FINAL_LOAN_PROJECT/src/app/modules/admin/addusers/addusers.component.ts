import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoanserviceService } from 'src/app/service/loanservice.service';

@Component({
  selector: 'app-addusers',
  templateUrl: './addusers.component.html',
  styleUrls: ['./addusers.component.css']
})
export class AddusersComponent {

  constructor(private fb:FormBuilder,
    private ls:LoanserviceService){}

adduserForm:FormGroup;
profilephoto:any;

reader=new FileReader();
proimg:any;

ngOnInit(): void {

this.adduserFormControlopen()
}

adduserFormControlopen()
{
this.adduserForm=this.fb.group({
name:[],
email:[],
userType:[],


})
}
onselectprofileimage(event:any){

this.profilephoto=event.target.files[0];
this.reader.onload=e=>this.proimg=this.reader.result;
this.reader.readAsDataURL(this.profilephoto);
}

saveuser()
{
  
  const f=new FormData();
  f.append("data",JSON.stringify(this.adduserForm.value));
  f.append("profile",this.profilephoto);

  this.ls.adduser(f).subscribe((data:any)=>{
    this.resetf();
  })
  
}

resetf(){
  this.adduserForm.reset();
  this.proimg=null;
}
}
