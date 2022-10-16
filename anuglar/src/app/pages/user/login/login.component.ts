import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/srevices/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private _data:DataService,private _route:Router) { }

  ngOnInit(): void {
   
  }
  handleLogin(loginForm:NgForm) {
    this._data.loginuser(loginForm.value).subscribe(
      (res) => {
        localStorage.setItem("userToken", res.data.token)
        this._data.userislogin = true
        this._data.user=res.data.user
      },
      (e) => { console.log("not user")},
      () => {
         loginForm.resetForm()
        this._route.navigateByUrl("/")
      }
   )
        
  }
  
}
