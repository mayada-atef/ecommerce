import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/srevices/data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
categories:any[]=[]
  constructor(public data:DataService,private _route:Router) { }

  ngOnInit(): void {
  }
  showcategory() {
    this.data.showAllcategory().subscribe(
      (res) => {
        this.categories = res.data
        console.log(this.categories)
      },
      () => { },
      ()=>{}
      
    )
    
  }
  
  handlelogout() {
    this.data.logout().subscribe(
      (res) => {console.log(res.message)},
      (e) => { console.log(e.message)},
      () => {
        
        if (this.data.userislogin) {
          console.log("logout user")
          localStorage.removeItem('userToken')
          this.data.userislogin = false
        }
        if (this.data.adminislogin) {
          console.log("logout admin")
          localStorage.removeItem('adminToken')
          this.data.adminislogin = false
        }
        this._route.navigateByUrl("/")    
      }

    )
  }

}
