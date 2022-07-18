import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Applyloan } from 'src/app/Model/applyloan';
import { CommonService } from 'src/app/shared/common.service';

@Component({
  selector: 'app-apply-for-loan',
  templateUrl: './apply-for-loan.component.html',
  styleUrls: ['./apply-for-loan.component.css']
})
export class ApplyForLoanComponent implements OnInit {

  constructor(private fb:FormBuilder,private css:CommonService) { }
  customerLoginForm:FormGroup
  cs:Applyloan[];
  ngOnInit(): void {
    this.customerLoginForm=this.fb.group(
      {
       
          applyLoanId:['',Validators.required],
        firstName:['',Validators.required],
        middleName:[],
        lastName:[],
        permanentAddress:[],
        localAddress:[],
        mobileNo:[],
        emailId:[],
        dateOfBirth:[],
        occupation:[],
        bankName:[],
        bankAccountNo:[],
        bankIfscCode:[],
        loanAmount:[],
        status:[],
        tenure:[],
        rateOfInterest:[],
          aadharCard:[],
        panCard:[] ,
        bankDetails:[] ,
         salarySlips:[] ,
        itrReturn:[] ,
         estimation:[] ,
         propertyPaper:[] ,
        signature:[] ,
        thumb:[] ,
         blankCheque: [] ,
         photo:[] 
      
      
      }
    )
  }

  pancard1:any;
  imagesrc1:any;
  reader =new FileReader();

  logincustomer()
  {
    
    this.css.save(this.customerLoginForm.value).subscribe();
  }
  abc(event:any)
  {
    this.pancard1= event.target.files[0];
    const file=event.target.files[0];
this.reader.onload=e =>this.imagesrc1=this.reader.result;
this.reader.readAsDataURL(file);

  
}
}