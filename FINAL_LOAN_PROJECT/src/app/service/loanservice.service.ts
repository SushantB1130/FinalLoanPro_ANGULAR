import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanserviceService {

  constructor(private http:HttpClient) { }

  addenquiry(enq:any)
  {
    return this.http.post("http://localhost:9091/addenquiry",enq);
  }


  getuser(userName:any,passWord:any)
  {
    return this.http.get("http://localhost:9091/getuserdata/"+userName+"/"+passWord)
  }


  sendMail(data:FormData)
  {
   alert("data in service")
    return this.http.post("http://localhost:9091/sendmailwithattachment",data);
  }

  

  adduser(f:FormData){

    return this.http.post("http://localhost:9091/adduser/",f)
  }

  getenquiry(enquirystatus1:string,enquirystatus2:string)
  {
    return this.http.get("http://localhost:9091/getenq/"+enquirystatus1+"/"+enquirystatus2);
  }

  getallusers()
  {
    return this.http.get("http://localhost:9091/getallusers");
  }

  deleteuser(userId)
  {
    return this.http.delete("http://localhost:9091/deletuser/"+userId);
  }

  verifyenq(eid:number)
  {
    return this.http.put("http://localhost:9091/updatestatus/"+eid,{});
  }

  getsingleuser(userType:string)
  {
    return this.http.get("http://localhost:9091/getsingleuser/"+userType);
  }
  getcibil(e:any)
{
  e.cibil={};
    return this.http.put("http://localhost:9091/getcibil",e);
}


}
