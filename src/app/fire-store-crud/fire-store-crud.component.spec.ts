import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireStoreCrudComponent } from './fire-store-crud.component';

describe('FireStoreCrudComponent', () => {
  let component: FireStoreCrudComponent;
  let fixture: ComponentFixture<FireStoreCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FireStoreCrudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FireStoreCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
