import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verificationdepartmentlogin',
  templateUrl: './verificationdepartmentlogin.component.html',
  styleUrls: ['./verificationdepartmentlogin.component.css']
})
export class VerificationdepartmentloginComponent implements OnInit {
  verificationdepartmentLoginForm!: FormGroup;
  constructor(private fb:FormBuilder,private router:Router) { }



  ngOnInit(): void {
    this.verificationdepartmentLoginForm=this.fb.group({
      username:[''],
      password:['']


    })
  }
  verificationlogin()
  {
    console.log("bbbbbb");
      this.router.navigate(['fullverification'])
  }
}

