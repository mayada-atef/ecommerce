import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/srevices/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-showallcategory',
  templateUrl: './showallcategory.component.html',
  styleUrls: ['./showallcategory.component.css']
})

export class ShowallcategoryComponent implements OnInit {
   i:number=1
  categories: any[] = [{}]
  divedit: boolean = false
  categoryId: string = ""
  editcategoryform = new FormGroup({
    name: new FormControl
    
  })
    
  get name() { return this.editcategoryform.get("name") }
   
  constructor(private _data: DataService, private activatedrouter: ActivatedRoute, private _route: Router) {
  }
  
  ngOnInit(): void {
    
    this._data.showAllcategory().subscribe(
      (res) => {
        this.categories = res.data
        console.log("res", res ,"i:",this.i+1)
        
      },
      () => { },
      () => { }
    )
  }
  delCategory(categoryId:string,index:number) {
    this._data.deleteCategory(categoryId).subscribe(
       () => { },
      (e) => { },
      () => {
        this.categories.splice(index, 1)
        this.ngOnInit()
      }
    )
    
  }createDivEdit(categoryId:any) {
    if (!this.divedit) {
      this.divedit = true
      this.categoryId=categoryId
    }
    
  }
  hadleEditCategory() {
    this._data.editCategory(this.categoryId,this.editcategoryform.value).subscribe(
      (res) => {
        console.log("res of all categories", res)
      
      },
      () => { },
      () => {
        this.divedit=false
        console.log("edit category finished")
        this.ngOnInit()
        
        
        
      }
    )
    
  }

}
  
