import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  header: string = 'Emmanuel Store';
  cartProductList!: Product[];
  cartNumber: any = '0';
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartProductList = this.cartService.getCartItems();
    this.result(this.cartProductList);
  }

  result(cart: Product[]) {
    let sum = 0;
    cart.forEach((item) => {
      sum += Number(item.quantity);
    });

    this.cartNumber = sum;
  }
}
