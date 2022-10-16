import { Component, NgModule, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/srevices/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userdata:any = {
    name: "",
    email: "",
    phone: "",
    password: "",
    age:""
  }
  specialerror=''
  constructor(private _user:DataService,private _route:Router) { }

  ngOnInit(): void {
    
  }
  
  registerhande(register: NgForm ) {
    let pstatus = this.checkphone(this.userdata.phone)

    if (register.valid&& pstatus) {
      console.log(register.value)
      this._user.registeruser(register.value).subscribe(
        (res) => {
          this._user.userislogin = true
          localStorage.setItem("userToken", res.data.token)
           this._user.user=res.data
          this._route.navigateByUrl("/")
         
        }
      )
      
    }
    
  }
  checkphone(pnum:string):boolean{
    if (
      (pnum.startsWith('010') || pnum.startsWith('015') || pnum.startsWith('011') ||
      pnum.startsWith('012') ) && pnum.length==11)
    {
      console.log('t1')
      this.specialerror=""
      return  true
    }  
    else {
      console.log("t2")
      if (pnum.length!=11) this.specialerror = "phone must be 11 number"
      else this.specialerror="invaliad format"
      return false
    }
}
}


