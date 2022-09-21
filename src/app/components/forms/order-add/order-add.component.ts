import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/CartService';

@Component({
  selector: 'app-order-add',
  templateUrl: './order-add.component.html',
  styleUrls: ['./order-add.component.scss']
})
export class OrderAddComponent implements OnInit, OnDestroy {

  updateSub$ !: Subscription
  form !:FormGroup
  items !:FormArray

  constructor(private fb: FormBuilder, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.form = this.createForm()
    this.updateSub$ = this.cartService.orderUpdateFromManageObservable$.subscribe( 
      (data) => {
        console.log(data.userItems)
        this.items = this.fb.array([], Validators.required)
        this.populateItems(data.userItems);
        this.form = this.fb.group({
          id : data.id,
          userName: this.fb.control(data.userName, [ Validators.required ]),
          userMobile: this.fb.control(data.userMobile, [ Validators.required ]),
          userItems: this.items
        })
      });
  }

  ngOnDestroy(): void {
      this.updateSub$.unsubscribe()
  }

  public get formArrayControls() {
    return (this.form.controls["userItems"] as FormArray).controls as FormGroup[];
}

  addItem() {
    const item: FormGroup = this.fb.group({
      itemName: this.fb.control<string>('', [ Validators.required ]),
      itemQuantity: this.fb.control<number>(1, [ Validators.required  ])
    })
    this.items.push(item)
  }

  removeItem(index: number) {
    this.items.removeAt(index)
  }

  processForm() {
    console.log(this.form.value)
    this.cartService.orderNotifyOther(this.form.value)
    this.form = this.createForm()
  }

  createForm() {
    this.items = this.fb.array([], Validators.required)
    return this.fb.group({
      userName: this.fb.control('', [ Validators.required ]),
      userMobile: this.fb.control('', [ Validators.required ]),
      userItems: this.items
    })
  }

  populateItems(userItems : any) {
    console.log(userItems)
    userItems.map((field:any) => this.items.push(this.fb.group(field)))
  }
}
