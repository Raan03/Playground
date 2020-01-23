import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelBindingComponent } from './model-binding.component';

describe('ModelBindingComponent', () => {
  let component: ModelBindingComponent;
  let fixture: ComponentFixture<ModelBindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelBindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
