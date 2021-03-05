import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoJsComponent } from './crypto-js.component';

describe('CryptoJsComponent', () => {
  let component: CryptoJsComponent;
  let fixture: ComponentFixture<CryptoJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CryptoJsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
