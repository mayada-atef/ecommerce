import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/srevices/data.service';


@Component({
  selector: 'app-loginadmin',
  templateUrl: './loginadmin.component.html',
  styleUrls: ['./loginadmin.component.css']
})
export class LoginadminComponent implements OnInit {

  // loginadminForm = new FormGroup({
  //   email:new FormControl(""),
  //    password:new FormControl("")
  // })
  // get email() { return  this.loginadminForm.get("email")}
  // get password(){ return  this.loginadminForm.get("password")}
  userData = {
    email:"",
    password:""
  }


  constructor(private _data:DataService,private _route:Router) { }

  ngOnInit(): void {
   
  }
  handleLoginadmin(login:NgForm) {
    this._data.loginadmin(login.value).subscribe(
      (res) => {
        localStorage.setItem("adminToken", res.data.token)
        this._data.adminislogin = true
        this._data.user = res.data.user
        
      },
      (e) => {
        console.log("you aren't an admin")
      
      },
      () => {
         login.resetForm()
        this._route.navigateByUrl("/admin")
      }
   )
        
    }
}
