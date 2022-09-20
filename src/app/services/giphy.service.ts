import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
@Injectable()
export class GiphyService {
  
  giphyParams = new Subject()

  giphyParamsObs$ = this.giphyParams.asObservable()

  constructor(private http:HttpClient){}
  
  getGiphyResults (searchParams : any) {
    
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }
    
    const params = new HttpParams()
      .set('api_key', '6gRlSGNn6VwpR9GXRclTKhRyyiZY0LPT')
      .set('limit', 10)
      .set('q', searchParams.searchQuery)
      .set('offset', searchParams.searchOffset)
      .set('rating', searchParams.searchRating)

    return this.http.get('https://api.giphy.com/v1/gifs/search', { headers, params } )
  }

  public giphyParamsOther (data:any) {
    if (data) {
        this.giphyParams.next(data)
    }
  }
}