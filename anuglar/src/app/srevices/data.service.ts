import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   /************************************************************ */
  /*******************        User     **********************/
   /************************************************************ */
  
  host = "http://localhost:3000/"
  public user: any = { name: "" }
  public userislogin: boolean = false
  public adminislogin: boolean = false
  public userId:string=""
  
  constructor(private _data: HttpClient) { }
  // register 
  registeruser(data: any): Observable<any>{
    return this._data.post(`${this.host}user/register`,data)
  }
  //login 
  loginuser(data: any): Observable<any>{
    return this._data.post(`${this.host}user/login`,data)
  }
  
  getalluserdata(): Observable<any>{
    return this._data.get(`${this.host}user/all`)
  }
  logout(): Observable<any>{
     return this._data.post(`${this.host}user//logout`,null)
  }
  profile(): Observable<any>{
    return this._data.post(`${this.host}user/me`,null)
  }
    /************************************************************ */
  /*******************         admin   **********************/
  /************************************************************* */
  //log in admin
 loginadmin(data: any): Observable<any>{
    return this._data.post(`${this.host}user/loginAdmin`,data)
  }
  
  showalladmin(): Observable<any>{
    return this._data.get(`${this.host}user/alladmins`)
  }
  addAdmin(data:any): Observable<any>{
    return this._data.post(`${this.host}user/addnewaAdmin`,data)
  }
  deleteAdmin(adminId:string) : Observable<any>{
    return this._data.delete(`${this.host}user/deleteAdmin/${adminId}`)
  }
  
  /************************************************************ */
  /*******************        Product     **********************/
  /************************************************************* */

  //show all product 
  getallproductdata(): Observable<any>{
    return this._data.get(`${this.host}product/showallproduct`)
  }
  getSingleCroduct(productId: string): Observable<any>{
    return this._data.get(`${this.host}product/showsingleproduct/${productId}`)
  }
  deleteProduct(productId: string): Observable<any>{
    return this._data.delete(`${this.host}product/deleteproduct/${productId}`)
  }
  editProduct(productId: string,data:any): Observable<any>{
     return this._data.patch(`${this.host}product/editproduct/${productId}`,data)
  }
  //add product
  addProduct(data:any) {
    return this._data.post(`${this.host}product/addproduct`,data)
  }
  
    /************************************************************ */
  /*******************         category    **********************/
  /************************************************************* */
  getCategoryProducts(categoryId: string): Observable<any>{
     return this._data.get(`${this.host}product/categoryproducts/${categoryId}`)
  }
  // show category
  showAllcategory(): Observable<any>{
     return this._data.get(`${this.host}category/showall`)
  }
  //edit category
  editCategory(categoryId: string, data: any) {
    return this._data.patch(`${this.host}category/edit/${categoryId}`,data)
  }
  //add category
 addCategory(data:any): Observable<any>{
    return this._data.post (`${this.host}category/add`,data)
  }
  //delete category
  deleteCategory(categoryId: string): Observable<any>{
    return this._data.delete(`${this.host}category/delete/${categoryId}`)
  }
  
addToCart(data:any):Observable<any>{
    return this._data.post("localhost:3000/cart/addtocart", data)
  }
  myCart():Observable<any>{
    return this._data.get(`${this.host}cart/myCart`)
  }
  
  delFromCart(productId:string):Observable<any>{
    return this._data.post(`${this.host}cart/delfromCart`,productId)
  }

}
