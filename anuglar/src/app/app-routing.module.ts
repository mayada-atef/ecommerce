import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotauthGuard } from './guards/notauth.guard';
import { AdminComponent } from './pages/admin/admin/admin.component';
import { LoginadminComponent } from './pages/admin/loginadmin/loginadmin.component';
import { AddcategoryComponent } from './pages/category/addcategory/addcategory.component';
import { EditcategoryComponent } from './pages/category/editcategory/editcategory.component';
import { HomeComponent } from './pages/home/home.component';
import { AddproductComponent } from './pages/product/addproduct/addproduct.component';
import { AllproductComponent } from './pages/product/allproduct/allproduct.component';
import { EditproductComponent } from './pages/product/editproduct/editproduct.component';
import { ShowsingleproductComponent } from './pages/product/showsingleproduct/showsingleproduct.component';
import { RegisterComponent } from './pages/register/register.component';
import { AllusersComponent } from './pages/user/allusers/allusers.component';
import { LoginComponent } from './pages/user/login/login.component';
import { NoauthadminGuard } from './guards/noauthadmin.guard';
import { ProductsComponent } from './pages/category/products/products.component';
import { ShowallcategoryComponent } from './pages/category/showallcategory/showallcategory.component';
import { ShowalladminsComponent } from './pages/admin/showalladmins/showalladmins.component';
import { AddadminComponent } from './pages/admin/addadmin/addadmin.component';
import { MycartComponent } from './pages/cart/mycart/mycart.component';


// import { FooterComponent } from './shared/footer/footer.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "admin", children: [
      { path: "", component: AdminComponent },
      { path: "loginadmin", component: LoginadminComponent },
      { path: "all", component: ShowalladminsComponent,canActivate:[NoauthadminGuard] },
      {path:"add",component:AddadminComponent,canActivate:[NoauthadminGuard]}
  ]},
  
  {
    path: "user", children: [
      { path: "login", component: LoginComponent},
      { path: "all", component: AllusersComponent,canActivate:[NotauthGuard] },
    ]
  },
  {
    path: "product", children: [
      { path: "add", component: AddproductComponent,canActivate:[NoauthadminGuard] },
      { path: "edit/:productId", component: EditproductComponent ,canActivate:[NoauthadminGuard] },
      { path: "all", component:AllproductComponent},
      { path: ":productId", component: ShowsingleproductComponent }
    ]
  },
  {
    path: "category", children: [
      { path: "add", component: AddcategoryComponent,canActivate:[NoauthadminGuard] },
      { path: "edit", component: EditcategoryComponent, canActivate: [NoauthadminGuard] },
      { path: "products/:categoryId", component: ProductsComponent },
      { path:"all",component:ShowallcategoryComponent,canActivate:[NoauthadminGuard] }
    ]
  },
  {
    path: "cart", children: [
      {path:"products",component:MycartComponent,canActivate:[NotauthGuard] }
    ]
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
