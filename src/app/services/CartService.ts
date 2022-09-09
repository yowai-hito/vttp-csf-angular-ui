import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';
@Injectable()
export class CartService {
  private notify = new Subject<any>();
  private orderNotify = new Subject<any>();
  private orderUpdateFromManage = new Subject<any>();
  private orderUpdateToManage = new Subject<any>();
  /**
   * Observable string streams
   */
  notifyObservable$ = this.notify.asObservable();
  orderNotifyObservable$ = this.orderNotify.asObservable();
  orderUpdateFromManageObservable$ = this.orderUpdateFromManage.asObservable();

  constructor(){}

  public notifyOther(data: any) {
    if (data) {
      this.notify.next(data);
    }
  }

  public orderNotifyOther(data: any) {
    if (data) {
      this.orderNotify.next(data);
    }
  }
  
  public orderUpdateFromManageOther(data: any) {
    if (data) {
      this.orderUpdateFromManage.next(data);
    }
  }
  
}