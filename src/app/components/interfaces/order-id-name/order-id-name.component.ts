import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/CartService';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-order-id-name',
  templateUrl: './order-id-name.component.html',
  styleUrls: ['./order-id-name.component.scss']
})
export class OrderIdNameComponent implements OnInit,OnDestroy {

  private subscription!: Subscription;
  ordersInfo = Array<any>();

  constructor(private cartService: CartService) {}
  
  ngOnInit(): void {
    this.subscription = this.cartService.orderNotifyObservable$.subscribe(
      (data) => {
        if (this.validateResponse(data)) {
          //troubleshoot id
          console.log(data.id)
          if (!data.hasOwnProperty('id')){
            data.id = uuidv4().slice(0,8)
          }
          this.ordersInfo.push(data)
          console.log(data.userItems)
        }
    });
  }
  
  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

  updateRow(index : number) {
    console.log(this.ordersInfo[index])
    this.cartService.orderUpdateFromManageOther(this.ordersInfo[index])
    this.ordersInfo.splice(index,1)
  }

  validateResponse(data:any) : boolean {
    if (data.hasOwnProperty('userName') &&
        data.hasOwnProperty('userMobile') &&
        data.hasOwnProperty('userItems')) {
      return true
    }
    return false
  }

}
