import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/srevices/data.service';

@Component({
  selector: 'app-allproduct',
  templateUrl: './allproduct.component.html',
  styleUrls: ['./allproduct.component.css']
})
export class AllproductComponent implements OnInit {
  products: any[] = []
  
  constructor(private _productsdata:DataService) { }

  ngOnInit(): void {
    this._productsdata.getallproductdata().subscribe(
      (res) => {
        this.products = res.data
        console.log(res,"all products")
      },
      (e) => {
        console.log(e.message)
      },
      () => {
      }
    )
     
  }
  deleteProduct(productId:any,index:number) {
     this._productsdata.deleteProduct(productId).subscribe(
      (res) => {console.log(res,"delete product res") },
        () => { },
        ()=>{this.products.splice(index,1)}
    )
  
}
}
