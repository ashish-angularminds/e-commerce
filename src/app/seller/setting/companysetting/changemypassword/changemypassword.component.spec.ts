import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangemypasswordComponent } from './changemypassword.component';

describe('ChangemypasswordComponent', () => {
  let component: ChangemypasswordComponent;
  let fixture: ComponentFixture<ChangemypasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangemypasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangemypasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
