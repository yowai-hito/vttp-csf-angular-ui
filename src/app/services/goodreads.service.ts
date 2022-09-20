import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class GoodreadsService {

  constructor(private http: HttpClient) { }

  headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
}

  getBookList(limit = 15, offset = 0) {

    const reqBody = {
      'limit': limit,
      'offset': offset
    }

    return this.http.post('http://localhost:8080/csf/assignments/book/list', reqBody, { headers: this.headers })
  }

  getBookDetails(bookId : string) {

    const reqBody = {
      'bookId': bookId
    }
    
    return this.http.post('http://localhost:8080/csf/assignments/book/details', reqBody, { headers: this.headers })
  }

}