import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduserComponent } from './adduser.component';
import { SettingService } from 'src/app/seller/service/setting/setting.service';
import { of, throwError } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CompanysettingComponent } from '../companysetting.component';
import { FormsModule } from '@angular/forms';

describe('AdduserComponent', () => {
  let component: AdduserComponent;
  let fixture: ComponentFixture<AdduserComponent>;
  let settingservice: SettingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdduserComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [CompanysettingComponent]
    })
    .compileComponents();

    settingservice = TestBed.inject(SettingService);
    fixture = TestBed.createComponent(AdduserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add new user', () => {
    spyOn(settingservice, 'createuser').and.returnValue(of({}));
    component.creatuser();
    expect(settingservice.createuser).toHaveBeenCalledWith({ email: '', password: '', name: '', role: '' });
  })

  it('should throw error while adding new user', () => {
    spyOn(settingservice, 'createuser').and.returnValue(throwError({error:{message:'error'}}));
    component.creatuser();
    expect(settingservice.createuser).toHaveBeenCalledWith({ email: '', password: '', name: '', role: '' });
  })
});
