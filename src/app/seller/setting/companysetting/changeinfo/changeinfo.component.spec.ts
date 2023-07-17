import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeinfoComponent } from './changeinfo.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CompanysettingComponent } from '../companysetting.component';
import { FormsModule } from '@angular/forms';
import { SettingService } from 'src/app/seller/service/setting/setting.service';
import { of, throwError } from 'rxjs';

describe('ChangeinfoComponent', () => {
  let component: ChangeinfoComponent;
  let fixture: ComponentFixture<ChangeinfoComponent>;
  let settingservice: SettingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeinfoComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [CompanysettingComponent]
    })
    .compileComponents();

    settingservice = TestBed.inject(SettingService);
    fixture = TestBed.createComponent(ChangeinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change info', () => {
    spyOn(settingservice, 'changeinfo').and.returnValue(of({}));
    component.changeinfo();
    expect(settingservice.changeinfo).toHaveBeenCalled();
  })

  it('should throw error while changing info', () => {
    spyOn(settingservice, 'changeinfo').and.returnValue(throwError({error:{message:'error'}}));
    component.changeinfo();
    expect(settingservice.changeinfo).toHaveBeenCalled();
  })
});
