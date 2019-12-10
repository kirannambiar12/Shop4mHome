import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CategoryComponent } from './category/category.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { BooksComponent } from './books/books.component';
import { CartComponent } from './cart/cart.component';
import { FashionComponent } from './fashion/fashion.component';
import {HomeComponent} from './home/home.component';
import{WishlistComponent} from './wishlist/wishlist.component';
import{CustomerProfileComponent} from './customer-profile/customer-profile.component';
import { AdminComponent } from './admin/admin.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { SportsComponent } from './sports/sports.component';
import { GroceriesComponent } from './groceries/groceries.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CategoryComponent,
    ElectronicsComponent,
    BooksComponent,
    CartComponent,
    FashionComponent,
    HomeComponent,
    WishlistComponent,
    CustomerProfileComponent,
    AdminComponent,
    FurnitureComponent,
    SportsComponent,
    GroceriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
