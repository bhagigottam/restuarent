import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryservicesComponent } from './deliveryservices.component';

describe('DeliveryservicesComponent', () => {
  let component: DeliveryservicesComponent;
  let fixture: ComponentFixture<DeliveryservicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryservicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
