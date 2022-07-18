import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CustomerRegister } from '../Model/customer-register';
import { Applyloan } from '../Model/applyloan';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  savecustomerregister(cu:CustomerRegister)
  {
    console.log("bb")
    return this.http.post<CustomerRegister>("http://localhost:3000/customerReigitser",cu);
  }

  save(a:Applyloan)
  {
    console.log("dfsfs");
    return this.http.post<Applyloan>("http://localhost:3000/applyloan",a);
  }
}
