import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanysettingComponent } from './companysetting.component';
import { SettingService } from '../../service/setting/setting.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AdduserComponent } from './adduser/adduser.component';
import { ChangeroleComponent } from './changerole/changerole.component';
import { ChangemypasswordComponent } from './changemypassword/changemypassword.component';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';

describe('CompanysettingComponent', () => {
  let component: CompanysettingComponent;
  let fixture: ComponentFixture<CompanysettingComponent>;
  let settingservice: SettingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanysettingComponent, AdduserComponent, ChangeroleComponent,ChangemypasswordComponent],
      imports: [HttpClientTestingModule,FormsModule],
      providers: []
    })
    .compileComponents();

    settingservice = TestBed.inject(SettingService);
    fixture = TestBed.createComponent(CompanysettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change flag', () => {
    component.change({});
    expect(component.flag).toEqual(true);
  })

  it('should load list', () => {
    spyOn(settingservice, 'getuser').and.returnValue(of({}));
    component.loadlist();
    expect(settingservice.getuser).toHaveBeenCalledWith({ sortBy: 'role', limit: 5, page: 1 });
  })

  it('should change page', () => {
    spyOn(component, 'loadlist');
    component.changepage(1);
    expect(component.pagination.page).toEqual(1);
    expect(component.loadlist).toHaveBeenCalled()
  })

  it('should load org', () => {
    component.loadorg();
    expect(component.org).toBeTruthy();
  })

  it('should update org info',()=> {
    spyOn(settingservice, 'updateorg').and.returnValue(of({}));
    spyOn(component, 'loadlist');
    component.updateorg();
    expect(settingservice.updateorg).toHaveBeenCalledWith({ name: '', email: '' });
    expect(component.loadlist).toHaveBeenCalledWith();
  })

  it('should delete an user', () => {
    spyOn(settingservice, 'deleteuser').and.returnValue(of({}));
    spyOn(component, 'loadlist');
    component.deleteuser();
    expect(settingservice.deleteuser).toHaveBeenCalled();
    expect(component.loadlist).toHaveBeenCalledWith();
  })

  it('should change password', () => {
    spyOn(settingservice, 'changeinfo').and.returnValue(of({}));
    spyOn(component, 'loadlist');
    component.changepassword();
    expect(settingservice.changeinfo).toHaveBeenCalledWith({password:''},'');
    expect(component.loadlist).toHaveBeenCalledWith();
  })
});
