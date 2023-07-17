import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangemypasswordComponent } from './changemypassword.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { SettingService } from 'src/app/seller/service/setting/setting.service';
import { of, throwError } from 'rxjs';

describe('ChangemypasswordComponent', () => {
  let component: ChangemypasswordComponent;
  let fixture: ComponentFixture<ChangemypasswordComponent>;
  let service: SettingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangemypasswordComponent],
      imports:[HttpClientTestingModule, FormsModule]
    })
    .compileComponents();

    service = TestBed.inject(SettingService);
    fixture = TestBed.createComponent(ChangemypasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change password', () => {
    spyOn(service, 'changepassword').and.returnValue(of({}));
    component.changepassword();
    expect(service.changepassword).toHaveBeenCalledWith({old_password: '', new_password: ''});
  })

  it('should throw error while changing password', () => {
    spyOn(service, 'changepassword').and.returnValue(throwError({error:{message:'error'}}));
    component.changepassword();
    expect(service.changepassword).toHaveBeenCalledWith({old_password: '', new_password: ''});
  })
});
