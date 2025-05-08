import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeAtJindalComponent } from './life-at-jindal.component';

describe('LifeAtJindalComponent', () => {
  let component: LifeAtJindalComponent;
  let fixture: ComponentFixture<LifeAtJindalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifeAtJindalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifeAtJindalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
