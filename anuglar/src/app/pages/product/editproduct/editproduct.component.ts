import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/srevices/data.service';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  product: any = {}
  productId:any=this.activerouter.snapshot.params["productId"]
  
  editproduct = new FormGroup({
    name:new FormControl(""),
    price: new FormControl(""),
    size: new FormControl(""),
    details: new FormControl(""),
    description: new FormControl(""),
    specification: new FormGroup({
    model: new FormControl(""),
    color: new FormControl(""),
    material: new FormControl("")

    })
        
  })
  get name() { return  this.editproduct.get("name")}
  get price() { return this.editproduct.get("price") }
  get size() { return this.editproduct.get("size") }
  get color() { return this.editproduct.get("color") }
  get model() { return this.editproduct.get("model") }
  get material() { return this.editproduct.get("material") }
  get details() { return this.editproduct.get("size") }
  get description() { return this.editproduct.get("description") }

  constructor(private _product:DataService,private _router:Router ,private activerouter:ActivatedRoute) { }

  ngOnInit(): void {
   this._product.getSingleCroduct(this.productId).subscribe(
      (res) => {
        console.log(res)
       this.product = res.data
       res.data.specification = res.data.specification[0]
       this.editproduct.patchValue(res.data)

      }
    )
  }
  handleEdit() {
    console.log(this.product)
  this.product = this.editproduct.value
    console.log(this.product)
    this._product.editProduct(this.productId,this.product).subscribe(
      (res) => { console.log(res)},
      () => { },
      ()=>{this._router.navigateByUrl("/product/all")}
    )
    
  }

}
