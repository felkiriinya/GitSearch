import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NameRepoComponent } from './name-repo.component';

describe('NameRepoComponent', () => {
  let component: NameRepoComponent;
  let fixture: ComponentFixture<NameRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NameRepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NameRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
