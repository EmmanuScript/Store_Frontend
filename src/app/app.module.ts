import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './compoenent/cart/cart.component';
import { ConfirmationComponent } from './compoenent/confirmation/confirmation.component';
import { ProductItemComponent } from './compoenent/product-item/product-item.component';
import { ProductListComponent } from './compoenent/product-list/product-list.component';
import { ProductItemDetailComponent } from './compoenent/product-item-detail/product-item-detail.component';
import { HomepageComponent } from './compoenent/homepage/homepage.component';
import { HeaderComponent } from './layout/header/header.component';
import { UserDetailsComponent } from './compoenent/cart/user-details/user-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ConfirmationComponent,
    ProductItemComponent,
    ProductListComponent,
    ProductItemDetailComponent,
    HomepageComponent,
    HeaderComponent,
    UserDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
