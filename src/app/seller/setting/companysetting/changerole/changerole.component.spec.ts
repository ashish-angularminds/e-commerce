import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeroleComponent } from './changerole.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CompanysettingComponent } from '../companysetting.component';
import { FormsModule } from '@angular/forms';
import { SettingService } from 'src/app/seller/service/setting/setting.service';
import { of, throwError } from 'rxjs';

describe('ChangeroleComponent', () => {
  let component: ChangeroleComponent;
  let fixture: ComponentFixture<ChangeroleComponent>;
  let settingservice: SettingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChangeroleComponent],
      imports: [HttpClientTestingModule, FormsModule],
      providers:[CompanysettingComponent]
    })
    .compileComponents();

    settingservice = TestBed.inject(SettingService);
    fixture = TestBed.createComponent(ChangeroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change role', () => {
    spyOn(settingservice, 'changerole').and.returnValue(of({}));
    component.changerole();
    expect(settingservice.changerole).toHaveBeenCalled()
  })

  it('should throw error while changing role', () => {
    spyOn(settingservice, 'changerole').and.returnValue(throwError({}));
    component.changerole();
    expect(settingservice.changerole).toHaveBeenCalled()
  })
});
