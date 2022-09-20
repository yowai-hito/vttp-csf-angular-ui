import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodreadsComponent } from './goodreads.component';

describe('GoodreadsComponent', () => {
  let component: GoodreadsComponent;
  let fixture: ComponentFixture<GoodreadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodreadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoodreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
