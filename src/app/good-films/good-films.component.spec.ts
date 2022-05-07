import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodFilmsComponent } from './good-films.component';

describe('GoodFilmsComponent', () => {
  let component: GoodFilmsComponent;
  let fixture: ComponentFixture<GoodFilmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoodFilmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodFilmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
