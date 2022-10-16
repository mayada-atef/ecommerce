import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/srevices/data.service';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {
admindata:any = {
    name: "",
    email: "",
    phone: "",
    password: "",
    age:""
  }
  specialerror=''
  constructor(private _data:DataService,private _route:Router) { }

  ngOnInit(): void {
    
  }
  
  addAdmin(addAdminform: NgForm) {
    let pstatus = this.checkphone(this.admindata.phone)

    if (addAdminform.valid && pstatus) {
      this._data.addAdmin(addAdminform.value).subscribe(
        (res) => {
          console.log("res from add admin", res)
          this._route.navigateByUrl("/admin/all")
          

        }
      )
      
    }
    
  }
  checkphone(pnum:string):boolean{
    if (
      (pnum.startsWith('010') || pnum.startsWith('015') || pnum.startsWith('011') ||
      pnum.startsWith('012') ) && pnum.length==11)
    {
      this.specialerror=""
      return  true
    }  
    else {
      if (pnum.length!=11) this.specialerror = "phone must be 11 number"
      else this.specialerror="invaliad format"
      return false
    }
}
}
