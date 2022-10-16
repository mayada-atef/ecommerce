import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/srevices/data.service';

@Component({
  selector: 'app-showalladmins',
  templateUrl: './showalladmins.component.html',
  styleUrls: ['./showalladmins.component.css']
})
export class ShowalladminsComponent implements OnInit {
   admins:any[]=[]
  constructor(private _data:DataService,private _route:Router) { }

  ngOnInit(): void {
    this._data.showalladmin().subscribe(
      (res) => {
        this.admins=res.data
        console.log("res of all admins",res)
      }
    )
  }
  delAdmin(adminId: string, index: number) {
       this._data.deleteAdmin(adminId).subscribe(
      (res) => {console.log(res,"delete admin res") },
        () => { },
        ()=>{this.admins.splice(index,1)}
    )
    
    
  }

}
