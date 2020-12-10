import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompLazyComponent } from './comp-lazy.component';

describe('CompLazyComponent', () => {
  let component: CompLazyComponent;
  let fixture: ComponentFixture<CompLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
