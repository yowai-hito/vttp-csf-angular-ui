import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { firstValueFrom, Observable, switchMap } from 'rxjs';
import { GoodreadsService } from 'src/app/services/goodreads.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  bookDetailsObs$ !: Observable<any>;
  bookDetails!: any;

  constructor(private route: ActivatedRoute, private gdreadsSvc: GoodreadsService) { }

  ngOnInit(): void {
    this.bookDetailsObs$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => 
        this.gdreadsSvc.getBookDetails(params.get('bookId')!))
    );

    firstValueFrom(this.bookDetailsObs$)
      .then((resp)=> {
        console.log(resp.data)
        this.bookDetails = resp.data
      })
  }
}
