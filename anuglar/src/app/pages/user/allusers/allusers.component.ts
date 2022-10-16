import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/srevices/data.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {
  users: any = {}
  constructor(private _data: DataService) { }

  ngOnInit(): void {
    this._data.getalluserdata().subscribe(
      (res) => {
        this.users = res
        console.log(res)
      },
      (e) => {
      
        console.log(e.message)
      },
      () => {
     
        console.log("finshed")
      }
    )

  }
}
