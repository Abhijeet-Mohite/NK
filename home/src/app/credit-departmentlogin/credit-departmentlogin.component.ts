import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-departmentlogin',
  templateUrl: './credit-departmentlogin.component.html',
  styleUrls: ['./credit-departmentlogin.component.css']
})
export class CreditDepartmentloginComponent implements OnInit {
  creditLoginForm!: FormGroup;
  constructor(private fb:FormBuilder,private router:Router) { }



  ngOnInit(): void {
    this.creditLoginForm=this.fb.group({
      username:[''],
      password:['']


    })
  }
  logincredit(){
this.router.navigate(['fullcredit'])
  }
}
