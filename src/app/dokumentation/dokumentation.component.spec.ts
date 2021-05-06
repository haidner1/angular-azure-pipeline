import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DokumentationComponent } from './dokumentation.component';

describe('DokumentationComponent', () => {
  let component: DokumentationComponent;
  let fixture: ComponentFixture<DokumentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DokumentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DokumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
