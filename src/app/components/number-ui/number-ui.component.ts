import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-number-ui',
  templateUrl: './number-ui.component.html',
  styleUrls: ['./number-ui.component.scss']
})
export class NumberUiComponent implements OnInit {

  name!: string;
  numbers = new Array<number>();
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
    this.name = params['name'];
    });
  }

  addNumber(save: number) : void {
    this.numbers.push(save)
  }

  delete(index: number) : void {
    this.numbers.splice(index,1)
  }
}
