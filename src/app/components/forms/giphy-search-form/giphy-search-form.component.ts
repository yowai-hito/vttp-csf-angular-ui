import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GiphyService } from 'src/app/services/giphy.service';

@Component({
  selector: 'app-giphy-search-form',
  templateUrl: './giphy-search-form.component.html',
  styleUrls: ['./giphy-search-form.component.scss']
})
export class GiphySearchFormComponent implements OnInit {

  offsetOptions !: number[]
  ratingOptions !: string[]
  searchForm !: FormGroup

  constructor(private fb: FormBuilder, private giphyService:GiphyService) { 
    this.ratingOptions = ['g','pg','pg-13','r']
    this.offsetOptions = Array(6).fill(0).map((x,i)=> {
      i+=1
      return i*5
    })
    console.log("Offset Options", this.offsetOptions)
  }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchQuery: this.fb.control('', [ Validators.required ]),
      searchOffset: this.fb.control('', [ Validators.required ]),
      searchRating: this.fb.control('', [ Validators.required ])
    })
  }

  processForm() {
    console.log(this.searchForm.value)
    this.giphyService.giphyParamsOther(this.searchForm.value)
  }
}
