import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  @Output() userDetails = new EventEmitter();
  totalPrice: number = 0;
  itemSelected = '';
  counter: string[] = ['1', '2', '3', '4', '5'];

  constructor(private cartService: CartService, private route: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.priceTotal();
  }

  onSubmit(value: any) {
    this.cartService.emptyCart();
    this.route.navigate([`confirm/${value.firstName}/${this.totalPrice}`]);
  }

  changeItem(value: string, prod: Product) {
    const index = this.cartItems.indexOf(prod);
    this.cartItems[index] = prod;
    this.cartItems[index].price = value;

    console.log(value);
    let stringedValues = JSON.stringify(this.cartItems);

    localStorage.setItem('products', stringedValues);
    this.priceTotal();
    window.location.reload();
  }

  priceTotal() {
    this.totalPrice = this.cartItems.reduce((i, item) => {
      this.totalPrice = parseFloat(
        (i + Number(item.price) * Number(item.quantity)).toFixed(2)
      );
      console.log(item.price);
      console.log(item.quantity);
      console.log(this.totalPrice);
      return this.totalPrice;
    }, 0);
  }

  removeItem(id: number): void {
    const storedProducts = this.cartService.getCartItems();
    const newProducts = storedProducts.filter(
      (product: Product) => product.id !== id
    );

    const removedProduct = storedProducts.filter(
      (prod: Product) => prod.id === id
    );

    console.log(removedProduct);

    window.localStorage.clear();
    let stringedValues = JSON.stringify(newProducts);

    localStorage.setItem('products', stringedValues);
    alert(removedProduct[0].name + ' removed from cart');
    window.location.reload();
    this.priceTotal();
  }
}
