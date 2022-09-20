import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodreadsLandingComponent } from './goodreads-landing.component';

describe('GoodreadsLandingComponent', () => {
  let component: GoodreadsLandingComponent;
  let fixture: ComponentFixture<GoodreadsLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodreadsLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodreadsLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
