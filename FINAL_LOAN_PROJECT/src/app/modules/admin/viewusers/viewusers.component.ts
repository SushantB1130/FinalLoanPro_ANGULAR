import { Component, OnInit } from '@angular/core';
import { LoanserviceService } from 'src/app/service/loanservice.service';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit{

  constructor(private ls:LoanserviceService){}

  users:any[];
  proimg:any;

  reader=new FileReader();

ngOnInit(): void {
  this.getallusers();
}

  getallusers()
  {
   this.ls.getallusers().subscribe((data:any)=>{
    this.users=data.responsedata;
    this.reader.onload=e=>this.proimg=this.reader.result;
this.reader.readAsDataURL(this.proimg);

   })
  }
  deleteuser(userId)
  {
    this.ls.deleteuser(userId).subscribe((data:any)=>{
      window.location.reload();
    });
  }
}
