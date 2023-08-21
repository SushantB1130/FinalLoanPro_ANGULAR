import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoanserviceService } from 'src/app/service/loanservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,
                private ls:LoanserviceService){}

  loginForm:FormGroup;

  ngOnInit(): void
   {
     this.loginForm=this.fb.group({
      username:[],
      password:[]
     })

   }

   onLogin()
   {
    let username:string=this.loginForm.controls['username'].value;
    let password:string=this.loginForm.controls['password'].value;

    this.ls.getuser(username,password).subscribe((data:any)=>{

      

    


      if(data.responsedata.userType=='re')
      {
         localStorage.setItem("userType","re");
         this.router.navigateByUrl('/dash/re')
      }
      
      else if(data.responsedata.userType=='oe')
      {
          localStorage.setItem("userType","oe");
          this.router.navigateByUrl('/dash/oe')
      }
      else if(data.responsedata.userType=='admin')
      {
          localStorage.setItem("userType","oe");
          this.router.navigateByUrl('/dash/admin')
      }

      else
      {
        alert('Enter Valid Login Credentials');
      }

    })

   }

}
