import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/srevices/data.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  addcategoryForm= new FormGroup({
  name:new FormControl("",Validators.required)
  })
  get name() { return this.addcategoryForm.get("name") }
  issumbitted:boolean=false
  constructor(private _data:DataService,private _route:Router) { }

  ngOnInit(): void {
  }
  categoryAdd() {
    this.issumbitted = true
    this._data.addCategory(this.addcategoryForm.value).subscribe(
      (res) => { console.log("res of add product",res)},
      () => { },
      ()=>{this._route.navigateByUrl("category/all")}
    )
  }

}
