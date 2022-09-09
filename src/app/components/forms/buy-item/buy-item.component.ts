import { Component, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/CartService';

@Component({
  selector: 'app-buy-item',
  templateUrl: './buy-item.component.html',
  styleUrls: ['./buy-item.component.scss']
})
export class BuyItemComponent implements OnInit {

  item !:FormGroup

  quantityOptions = Array<number>()

  constructor(private fb: FormBuilder, private cartService: CartService) { }
  
  @Input()
  submitType = "Add To Cart"

  ngOnInit(): void {
    this.quantityOptions = Array(10).fill(0).map((x,i)=>i+1)
    this.item = this.fb.group({
      itemName: this.fb.control('', [ Validators.required ]),
      itemPrice: this.fb.control('', [ Validators.required ]),
      itemQuantity: this.fb.control('', [ Validators.required ])
    })
  }

  processForm() {
    console.log(this.item.value)
    this.cartService.notifyOther(this.item.value)
    console.log('outputted')
  }
}
