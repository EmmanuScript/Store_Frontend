import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
  @Input() productItem!: Product;
  itemSelected = '1';
  counter: string[] = ['1', '2', '3', '4', '5'];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {}

  valueSelected(value: any) {
    this.itemSelected = value;
  }

  addItemToCart(product: Product): void {
    const cartProducts: Product[] = this.cartService.getCartItems();
    let cartItem = cartProducts.find((res) => res.id === product.id);

    if (cartItem) {
      cartItem.quantity = this.itemSelected;
      cartItem ? this.productService.addProduct(cartProducts) : null;
    } else {
      cartProducts.push(
        Object.assign(product, { quantity: this.itemSelected })
      );
      this.productService.addProduct(cartProducts);
      const success = `${product.name} is now in your cart.`;
      alert(success);
    }
    window.location.reload();
  }
}
