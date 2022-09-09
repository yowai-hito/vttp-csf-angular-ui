import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor() {}

  hover = false

  @Input()
  current = Math.floor(Math.random() *30 + 1)

  @Output()
  savedNumber = new EventEmitter<number>()

  ngOnInit(): void {
  }

  next(): void {
    this.current+=1
    this.current%=31
    console.log("next clicked")
  }

  prev(): void {
    this.current-=1
    if (this.current < 0) {
      this.current = 30
    }
    console.log("previous clicked")
  }

  save() {
    this.savedNumber.emit(this.current)
  }

  hoverNumber() : void {
    this.hover = true
    console.log("hovering")
  }

  unhoverNumber() : void {
    this.hover = false
    console.log("no longer hovering")
  }
}
