import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderIdNameComponent } from './order-id-name.component';

describe('OrderIdNameComponent', () => {
  let component: OrderIdNameComponent;
  let fixture: ComponentFixture<OrderIdNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderIdNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderIdNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
