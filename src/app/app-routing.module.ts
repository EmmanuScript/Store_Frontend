import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './compoenent/cart/cart.component';
import { ConfirmationComponent } from './compoenent/confirmation/confirmation.component';
import { HomepageComponent } from './compoenent/homepage/homepage.component';
import { ProductItemDetailComponent } from './compoenent/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './compoenent/product-list/product-list.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'confirm/:firstName/:totalPrice', component: ConfirmationComponent },
  { path: 'product/:id', component: ProductItemDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
