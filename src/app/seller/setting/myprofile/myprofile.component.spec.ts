import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyprofileComponent } from './myprofile.component';
import { AuthService } from '../../service/auth/auth.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';

describe('MyprofileComponent', () => {
  let component: MyprofileComponent;
  let fixture: ComponentFixture<MyprofileComponent>;
  let authservice: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyprofileComponent],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();

    authservice = TestBed.inject(AuthService);
    fixture = TestBed.createComponent(MyprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load data', () => {
    spyOn(authservice, 'get').and.returnValue(of({}));
    component.loaddata();
    expect(authservice.get).toHaveBeenCalledWith('');
    expect(component.classes).toEqual('bg-danger-subtle text-danger btn rounded-circle position-absolute tl shadow-lg');
  })

  it('should load data', () => {
    spyOn(authservice, 'get').and.returnValue(of({isEmailVerified:true}));
    component.localToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZjYTliYmVjNmQ0NmNlN2I4ZjA0ZTIiLCJpYXQiOjE2ODk2NjQ5ODgsImV4cCI6MTY4OTc1MTM4OCwidHlwZSI6ImFjY2VzcyJ9.0fmAnsDRi6o6M555NA4PtfPy0ViFVX_JkWCj3QyPVAI';
    component.loaddata();
    expect(authservice.get).toHaveBeenCalledWith('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZjYTliYmVjNmQ0NmNlN2I4ZjA0ZTIiLCJpYXQiOjE2ODk2NjQ5ODgsImV4cCI6MTY4OTc1MTM4OCwidHlwZSI6ImFjY2VzcyJ9.0fmAnsDRi6o6M555NA4PtfPy0ViFVX_JkWCj3QyPVAI');
    expect(component.classes).toEqual('bg-success-subtle text-success disabled btn rounded-circle position-absolute tl shadow-lg');
  })

  it('should send verification request', () => {
    spyOn(authservice, 'sendverificationmail').and.returnValue(of({}));
    component.verify();
    expect(authservice.sendverificationmail).toHaveBeenCalledWith('');
  })

  it('should throw error while verificaton request', () => {
    spyOn(authservice, 'sendverificationmail').and.returnValue(throwError({error:{message:'error'}}));
    component.verify();
    expect(authservice.sendverificationmail).toHaveBeenCalledWith('');
  })
});
