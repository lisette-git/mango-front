import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimelistComponent } from './primelist.component';

describe('PrimelistComponent', () => {
  let component: PrimelistComponent;
  let fixture: ComponentFixture<PrimelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
