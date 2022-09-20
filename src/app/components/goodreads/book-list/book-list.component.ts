import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { GoodreadsService } from 'src/app/services/goodreads.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookList !: any;

  constructor(private goodreadsSvc: GoodreadsService) { }

  ngOnInit(): void {
    firstValueFrom(this.goodreadsSvc.getBookList())
      .then((resp : any) => {
        console.log(resp.data)
        this.bookList = resp.data
      })
  }
}
