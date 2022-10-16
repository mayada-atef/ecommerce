import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/srevices/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 products:any[]=[]
  constructor(private _data:DataService,private activated:ActivatedRoute) { }

  ngOnInit(): void {
    this._data.getCategoryProducts(this.activated.snapshot.params["categoryId"]).subscribe(
      (res) => {
        this.products = res.data
        console.log(this.products)
        
      },
      (e) => {
        
      
      },
      () => {
       
      }
   )
        
    }
  

}
