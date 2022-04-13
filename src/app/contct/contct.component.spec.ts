import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContctComponent } from './contct.component';

describe('ContctComponent', () => {
  let component: ContctComponent;
  let fixture: ComponentFixture<ContctComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContctComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
