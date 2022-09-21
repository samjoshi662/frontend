import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionButtonComponent } from './sanction-button.component';

describe('SanctionButtonComponent', () => {
  let component: SanctionButtonComponent;
  let fixture: ComponentFixture<SanctionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanctionButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanctionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
