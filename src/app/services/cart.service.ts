import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  storage = window.localStorage;

  constructor() {}

  getCartItems() {
    const getItems = this.storage.getItem('products');
    return getItems ? JSON.parse(getItems) : [];
  }

  emptyCart(): void {
    this.storage.clear;
  }
}
