import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/CartService';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy{

  private subscription!: Subscription;
  cart = Array<any>();
  constructor(private cartService: CartService) { }
  total = 0

  @Output()
  deleteRowRequest = new EventEmitter<number>()

  ngOnInit(): void {
    this.subscription = this.cartService.notifyObservable$.subscribe(
      (data) => {
        if (this.validateResponse(data)) {
          this.cart.push(data)
          this.total += data.itemPrice * data.itemQuantity
          console.log(data)
        }
    });
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe;
  }

  private validateResponse(data: any) : boolean {
    if (data.hasOwnProperty('itemName') &&
        data.hasOwnProperty('itemPrice') &&
        data.hasOwnProperty('itemQuantity')) {
      return true
    }
    return false
  }

  deleteRow(index : number) {
    this.total -= this.cart[index].itemPrice * this.cart[index].itemQuantity
    this.cart.splice(index, 1);
  }
}
