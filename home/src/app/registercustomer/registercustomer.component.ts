import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CustomerRegister } from '../Model/customer-register';
import { CommonService } from '../shared/common.service';

@Component({
  selector: 'app-registercustomer',
  templateUrl: './registercustomer.component.html',
  styleUrls: ['./registercustomer.component.css']
})
export class RegistercustomerComponent implements OnInit {
  customerRegisterForm:FormGroup;
   
  constructor(private fb:FormBuilder,private cs:CommonService) { }

  ngOnInit(): void {
    this.customerRegisterForm=this.fb.group({
      customerId:[],
      firstName:[''],
      lastName:[''],
      username:[''],
      password:[''],
      emailId:[''],
      mobileNo:[]
    })
  }
  registerCustomer()
  {
    
    this.cs.savecustomerregister(this.customerRegisterForm.value).subscribe();
  }
}
