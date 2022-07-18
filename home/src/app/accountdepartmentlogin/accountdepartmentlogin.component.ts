import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accountdepartmentlogin',
  templateUrl: './accountdepartmentlogin.component.html',
  styleUrls: ['./accountdepartmentlogin.component.css']
})
export class AccountdepartmentloginComponent implements OnInit {
  accountmanagerloginForm!: FormGroup;
  constructor(private fb:FormBuilder,private router:Router) { }



  ngOnInit(): void {
    this.accountmanagerloginForm=this.fb.group({
      username:[''],
      password:['']


    })
  }


  loginaccountmanager()
  {
    console.log("aaaaaaaaaaaaaa");
      this.router.navigate(['fullaccount'])
  }


}
