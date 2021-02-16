import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegFormTaskComponent } from './reg-form-task.component';

describe('RegFormTaskComponent', () => {
  let component: RegFormTaskComponent;
  let fixture: ComponentFixture<RegFormTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegFormTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegFormTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
