import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {

  customerLoginForm!: FormGroup;
  constructor(private fb:FormBuilder,private router:Router) { }



  ngOnInit(): void {
    this.customerLoginForm=this.fb.group({
      username:[''],
      password:['']


    })
  }

  logincustomer()
  {
    console.log("aaaaaaaaaaaaaa");
      this.router.navigate(['fullcustomer'])
  }


}
