import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.scss'],
})
export class ProductItemDetailComponent implements OnInit {
  private ngUnsubscribe = new Subject<void>();
  product!: Product;
  products!: Product[];
  quantity: number = 1;
  id!: number;
  counter: string[] = ['1', '2', '3', '4', '5'];
  itemSelected = '1';

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
    });
    this.productService
      .getProduct()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe({
        next: (res) => {
          this.products = res;
          this.product = this.getDetails(this.id);
        },
        error: (err) => console.log(err),
      });
  }

  getDetails(id: any) {
    return this.products.filter((prod) => prod.id === id)[0];
  }

  changeItem(value: any) {
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

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
