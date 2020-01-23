import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceServiceComponent } from './price-service.component';

describe('PriceServiceComponent', () => {
  let component: PriceServiceComponent;
  let fixture: ComponentFixture<PriceServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
