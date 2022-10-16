import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/srevices/data.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
 issumbitted:boolean=false
     addproductForm = new FormGroup({
    name:new FormControl("",Validators.required),
    price: new FormControl("",Validators.required),
    size: new FormControl(""),
    details: new FormControl(""),
    description: new FormControl(""),
    categoryId:new FormControl("",Validators.required),
    specification: new FormGroup({
    model: new FormControl(""),
    color: new FormControl(""),
    material: new FormControl("")

    })
        
  })
  get name() { return  this. addproductForm.get("name")}
  get price() { return this. addproductForm.get("price") }
  get size() { return this. addproductForm.get("size") }
  get color() { return this. addproductForm.get("color") }
  get model() { return this. addproductForm.get("model") }
  get material() { return this. addproductForm.get("material") }
  get details() { return this. addproductForm.get("size") }
  get description() { return this.addproductForm.get("description") }
  
   get categoryId() { return this.addproductForm.get("categoryId") }

  constructor(private _product:DataService,private _route :Router) { }
  ngOnInit(): void {

  }
  handleAdd() {
    this.issumbitted=true
    console.log(this.addproductForm.value)
    this._product.addProduct(this.addproductForm.value).subscribe(
      (res) => { 
        console.log(res)
      },
      () => { },
      ()=>{this._route.navigateByUrl("/product/all")}
    )
    
  }
    


}
