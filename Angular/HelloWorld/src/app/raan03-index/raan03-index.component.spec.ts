import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Raan03IndexComponent } from './raan03-index.component';

describe('Raan03IndexComponent', () => {
  let component: Raan03IndexComponent;
  let fixture: ComponentFixture<Raan03IndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Raan03IndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Raan03IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
