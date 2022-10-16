import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/srevices/data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = []
  status=0
  constructor(private _productsdata:DataService) { }

  ngOnInit(): void {
    this._productsdata.getallproductdata().subscribe(
      (res) => {
        this.products = res.data
        console.log(res)
      },
      (e) => {
        this.status = 1
        console.log(e.message)
      },
      () => {
        this.status = 2
        console.log("finshed")
      }
    )
     
  }

}
