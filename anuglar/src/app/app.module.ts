import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavComponent } from './shared/nav/nav.component';
import { FooterComponent } from './shared/footer/footer.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './pages/user/login/login.component';
import { AllusersComponent } from './pages/user/allusers/allusers.component';
import { AddproductComponent } from './pages/product/addproduct/addproduct.component';
import { ShowsingleproductComponent } from './pages/product/showsingleproduct/showsingleproduct.component';
import { AllproductComponent } from './pages/product/allproduct/allproduct.component';
import { EditproductComponent } from './pages/product/editproduct/editproduct.component'
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoginadminComponent } from './pages/admin/loginadmin/loginadmin.component';
import { AdminComponent } from './pages/admin/admin/admin.component';
import { NavadminComponent } from './shared/navadmin/navadmin.component';
import { AuthAdminInterceptor } from './interceptors/auth-admin.interceptor';
import { ShowallcategoryComponent } from './pages/category/showallcategory/showallcategory.component';
import { AddcategoryComponent } from './pages/category/addcategory/addcategory.component';
import { EditcategoryComponent } from './pages/category/editcategory/editcategory.component';
import { ProductsComponent } from './pages/category/products/products.component';
import { ShowalladminsComponent } from './pages/admin/showalladmins/showalladmins.component';
import { AddadminComponent } from './pages/admin/addadmin/addadmin.component';
import { MycartComponent } from './pages/cart/mycart/mycart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    AllusersComponent,
    AddproductComponent,
    ShowsingleproductComponent,
    AllproductComponent,
    EditproductComponent,
    LoginadminComponent,
    AdminComponent,
    NavadminComponent,
    ShowallcategoryComponent,
    AddcategoryComponent,
    EditcategoryComponent,
    ProductsComponent,
    ShowalladminsComponent,
    AddadminComponent,
    MycartComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    {provide:HTTP_INTERCEPTORS,useClass:AuthAdminInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
