import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruncateButtonComponent } from './truncate-button.component';

describe('TruncateButtonComponent', () => {
  let component: TruncateButtonComponent;
  let fixture: ComponentFixture<TruncateButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TruncateButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TruncateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
