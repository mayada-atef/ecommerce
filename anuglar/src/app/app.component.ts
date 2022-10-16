import { Component } from '@angular/core';
import { DataService } from './srevices/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online shopping ';
  constructor(public data: DataService) {
    let token: string | null = ""
    
    if (localStorage.getItem('userToken')) token = localStorage.getItem("userToken")
    else if (localStorage.getItem("adminToken")) token = localStorage.getItem("adminToken")
    else token = ""
    console.log(token)

    if (token != "") {
      this.data.profile().subscribe(res => {
        if (res.data.type == "admin") this.data.adminislogin = true
        else this.data.userislogin = true
        console.log(res.data.type)
        this.data.user=res.data
      },
        (e) => { console.log(e.message) },
        () => {
          console.log(this.data.adminislogin)
         }
    
      )
    }
  }
}
