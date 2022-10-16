import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/srevices/data.service';

@Component({
  selector: 'app-mycart',
  templateUrl: './mycart.component.html',
  styleUrls: ['./mycart.component.css']
})
export class MycartComponent implements OnInit {
  val: number = 1
  cartproducts: any[] = []
  products:any[]=[]
  cartproductsId:string=""
  constructor(private _data:DataService, private _router: Router) { }

  ngOnInit(): void {
    this._data.myCart().subscribe(
      res => {
        console.log(res, "res of  my cart")
        this.cartproducts = res.data.products
        
        console.log(this.cartproducts)
        this.cartproducts.forEach(element => {
          this.cartproductsId = element.productId
          this._data.getSingleCroduct(this.cartproductsId).subscribe(
            (ele) => {
              console.log(ele.data, "product")
              this.products.push(ele.data)
            }
          )
        });     
      }
    )
    
  }
   handleBtn(type: string) {
    if (type == "+") this.val++
    else this.val--
  }

  // getTotalAmount() {
  //   let grandTotal = 0
  //   this.cartDataList.map((a: any) => {
  //     grandTotal += a.total
  //   })
  // }

  handleDelete(productId: string, index: number) {
    this._data.delFromCart(productId).subscribe(
      (res) => { console.log(res) },
      () => { },
      () => { this.products.splice(index, 1) }
    )
  }

  // removeAllCart() {
  //   this.cartDataList = []
  //   this.productList.next(this.cartDataList)
  // }


  // handleClick() {
  //   this.testEvent = "hello"
  //   console.log("hello")
  // }

 


}
