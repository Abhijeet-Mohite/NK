import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminmanagerlogin',
  templateUrl: './adminmanagerlogin.component.html',
  styleUrls: ['./adminmanagerlogin.component.css']
})
export class AdminmanagerloginComponent implements OnInit {

  adminmanagerloginForm!: FormGroup;
  constructor(private fb:FormBuilder,private router:Router) { }



  ngOnInit(): void {
    this.adminmanagerloginForm=this.fb.group({
      username:[''],
      password:['']


    })
  }

  loginadminmanager()
  {
    console.log("aaaaaaaaaaaaaa");
      this.router.navigate(['fulladmin'])
  }


}
