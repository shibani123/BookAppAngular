import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerRepository } from 'src/app/model/customer.repository';
import { Customer } from 'src/app/model/customer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  public check:String;
  submitted : boolean = true;
  msg:string="";
  actor : String="";
  constructor(public repo: CustomerRepository,public customer: Customer,private router : Router){}
  submitLogin(f:NgForm){
    if(f.valid){
      this.check = (this.repo.getByCustomerUsername(this.customer.username)).password;
      
      //console.log(this.check);  
      if(this.check === this.customer.password){
        
        if(this.actor === "admin")
            {
              this.router.navigate(['/admin-index']);
            }
        else {
          this.router.navigate(['/customer-index']);
        }
      }
      else{ 
        this.msg="Please enter valid credentials!!"
      }
   }
  }
  ngOnInit() {

  }

}
