import { Component, OnDestroy, OnInit } from '@angular/core';
import { firstValueFrom, Subscription } from 'rxjs';
import { GiphyService } from 'src/app/services/giphy.service';

@Component({
  selector: 'app-giphy-search-result',
  templateUrl: './giphy-search-result.component.html',
  styleUrls: ['./giphy-search-result.component.scss']
})
export class GiphySearchResultComponent implements OnInit, OnDestroy {

  constructor(private giphyService: GiphyService) { }

  giphyResultsPromise !: Promise<any>;
  giphyParamsSub$ !: Subscription
  giphyResults !: Array<JSON>;

  ngOnInit(): void {
    this.giphyParamsSub$ = this.giphyService.giphyParamsObs$.subscribe(
      (data) => {
        this.giphyResultsPromise = firstValueFrom(this.giphyService.getGiphyResults(data))
          this.giphyResultsPromise.then((data)=> {
            console.log(data.data)
            this.giphyResults = data.data as Array<JSON>
          })
          .catch((error) =>
            console.log(error)
          );
      }
    )
  }

  ngOnDestroy(): void {
    this.giphyParamsSub$.unsubscribe()
  }

  deleteRow(index : number) {
    this.giphyResults.splice(index, 1);
  }
}
