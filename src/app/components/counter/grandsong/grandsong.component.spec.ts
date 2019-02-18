import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandsongComponent } from './grandsong.component';

describe('GrandsongComponent', () => {
  let component: GrandsongComponent;
  let fixture: ComponentFixture<GrandsongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandsongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandsongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
