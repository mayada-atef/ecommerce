import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/srevices/data.service';

@Component({
  selector: 'app-showsingleproduct',
  templateUrl: './showsingleproduct.component.html',
  styleUrls: ['./showsingleproduct.component.css']
})
export class ShowsingleproductComponent implements OnInit {
  productObj:any={}
  constructor(public data:DataService,private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.data.getSingleCroduct(this._route.snapshot.params["productId"]).subscribe(
      (res) => {
        console.log(res)
        this.productObj = res.data
        
      }
    )
      this.data.profile().subscribe(
      res => {
        console.log(res, "res of profile fun in my cart")
          this.data.userId = res.data._id
          console.log(res.data.token, "token")
          console.log(res.data.token,"id")
      } 
    )

  }
  handleAddtoCart(productId:any) {
    this.data.addToCart(productId).subscribe(
      res=> console.log(res,"res of add to product")
    )
  }
  actionMethod(event: any) {
    event.target.disabled=true
  }
  

}
