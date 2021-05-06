import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeiterbildungComponent } from './weiterbildung.component';

describe('WeiterbildungComponent', () => {
  let component: WeiterbildungComponent;
  let fixture: ComponentFixture<WeiterbildungComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeiterbildungComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeiterbildungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
