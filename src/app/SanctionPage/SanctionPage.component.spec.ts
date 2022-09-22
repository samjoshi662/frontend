import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanctionPageComponent } from './SanctionPage.component';

describe('SanctionPageComponent', () => {
  let component: SanctionPageComponent;
  let fixture: ComponentFixture<SanctionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanctionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SanctionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
