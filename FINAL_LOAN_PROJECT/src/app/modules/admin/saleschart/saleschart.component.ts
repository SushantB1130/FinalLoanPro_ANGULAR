import { Component,OnInit } from '@angular/core';
import { LoanserviceService } from 'src/app/service/loanservice.service';

@Component({
  selector: 'app-saleschart',
  templateUrl: './saleschart.component.html',
  styleUrls: ['./saleschart.component.css']
})
export class SaleschartComponent implements OnInit {

  constructor(private ls:LoanserviceService){}

  ngOnInit(): void {

    
  }
  enquiries:any[];

  enquirystatus:string;
  enquirystatus2:string='no';


  onselectstatus()
  {
   
    this.ls.getenquiry(this.enquirystatus,this.enquirystatus2).subscribe((data:any)=>{
      this.enquiries=data.responsedata;
      console.log(this.enquiries);
      
    })
    
  }
}
