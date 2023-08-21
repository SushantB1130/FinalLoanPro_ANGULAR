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
}
