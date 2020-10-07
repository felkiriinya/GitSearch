import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameResultComponent } from './name-result.component';

describe('NameResultComponent', () => {
  let component: NameResultComponent;
  let fixture: ComponentFixture<NameResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
