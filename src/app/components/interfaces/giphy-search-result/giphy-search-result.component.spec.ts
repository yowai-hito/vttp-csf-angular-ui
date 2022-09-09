import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphySearchResultComponent } from './giphy-search-result.component';

describe('GiphySearchResultComponent', () => {
  let component: GiphySearchResultComponent;
  let fixture: ComponentFixture<GiphySearchResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiphySearchResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiphySearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
