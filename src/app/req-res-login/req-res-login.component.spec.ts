import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqResLoginComponent } from './req-res-login.component';

describe('ReqResLoginComponent', () => {
  let component: ReqResLoginComponent;
  let fixture: ComponentFixture<ReqResLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReqResLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqResLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
