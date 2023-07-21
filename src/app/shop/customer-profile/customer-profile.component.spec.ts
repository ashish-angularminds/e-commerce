import { ComponentFixture, TestBed, fakeAsync, flush, tick } from '@angular/core/testing';
import { CustomerProfileComponent } from './customer-profile.component';
import { CustomerService } from '../services/customer/customer.service';
import { Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ImageCropperModule } from 'ngx-image-cropper';
import { of, throwError } from 'rxjs';
import Swal from 'sweetalert2';
import { NgxUiLoaderService } from 'ngx-ui-loader';

describe('CustomerProfileComponent', () => {
  let component: CustomerProfileComponent;
  let fixture: ComponentFixture<CustomerProfileComponent>;
  let customerservice: CustomerService;
  let router: Router;
  let loader: NgxUiLoaderService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerProfileComponent],
      imports: [HttpClientTestingModule, FormsModule, NgxDropzoneModule, ImageCropperModule],
      providers: [CustomerService]
    })
    .compileComponents();

    localStorage.setItem('loginuser','mock')
    loader = TestBed.inject(NgxUiLoaderService);
    router = TestBed.inject(Router);
    customerservice = TestBed.inject(CustomerService);
    fixture = TestBed.createComponent(CustomerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get profile details', () => {
    spyOn(customerservice, 'get').and.returnValue(of({}));
    component.getProfile();
    expect(customerservice.get).toHaveBeenCalledWith('mock');
  })

  it('should get profile details', () => {
    spyOn(customerservice, 'get').and.returnValue(throwError({ error:{message:'error'}}));
    component.getProfile();
    expect(customerservice.get).toHaveBeenCalledWith('mock');
  })

  it('should delete product', fakeAsync(() => {
    spyOn(customerservice, 'removeprofileimg').and.returnValue(of({}));
    spyOn(component, 'getProfile');
    component.delete();
    Swal.clickConfirm();
    tick();
    expect(customerservice.removeprofileimg).toHaveBeenCalledWith('mock');
    expect(component.getProfile).toHaveBeenCalled();
    flush();
  }));

  it('should delete product', fakeAsync(() => {
    spyOn(customerservice, 'removeprofileimg').and.returnValue(throwError({ error: { message: 'error' } }));
    component.delete();
    Swal.clickConfirm();
    tick();
    expect(customerservice.removeprofileimg).toHaveBeenCalledWith('mock');
    flush();
  }));

  it('should get address', () => {
    spyOn(customerservice, 'getaddress').and.returnValue(of({}));
    component.getaddress();
    expect(customerservice.getaddress).toHaveBeenCalledWith('mock');
  })

  it('should get address', () => {
    spyOn(customerservice, 'getaddress').and.returnValue(throwError({ error: {} }));
    component.getaddress();
    expect(customerservice.getaddress).toHaveBeenCalledWith('mock');
  });

  it('should update the profile', () => {
    spyOn(customerservice, 'updateprofile').and.returnValue(of({}));
    component.editProfile();
    expect(customerservice.updateprofile).toHaveBeenCalledWith('mock', {email: '', name: ''});
  })

  it('should throw error while updating the profile', () => {
    spyOn(customerservice, 'updateprofile').and.returnValue(throwError({error:{message:'error'}}));
    component.editProfile();
    expect(customerservice.updateprofile).toHaveBeenCalledWith('mock', {email: '', name: ''});
  })

  it('should get event', () => {
    component.getevent(new Event(''));
    expect(component.imageChangedEvent).toEqual(new Event(''));
  })

  it('should get the cropped img', () => {
    spyOn(loader, 'start');
    component.fileChangeEvent(new Event(''));
    expect(loader.start).toHaveBeenCalled();
  })

  it('should get img file', () => {
    component.imageCropped(new Event(''));
    expect(component.imgfile).toEqual('');
  })

  it('should stop loader', () => {
    spyOn(loader, 'stop');
    component.cropperReady();
    expect(loader.stop).toHaveBeenCalled();
  })

  it('should upload the images', () => {
    let file = new FormData();
    spyOn(customerservice, 'updateprofileimg').and.returnValue(of({}));
    component.upload();
    expect(customerservice.updateprofileimg).toHaveBeenCalledWith('mock', file);
  })

  it('should throw error while upload the images', () => {
    let file = new FormData();
    spyOn(customerservice, 'updateprofileimg').and.returnValue(throwError({error:{message:'error'}}));
    component.upload();
    expect(customerservice.updateprofileimg).toHaveBeenCalledWith('mock', file);
  })

  it('should add address', () => {
    spyOn(customerservice, 'setaddress').and.returnValue(of({}));
    spyOn(component, "getaddress");
    component.addaddress();
    expect(customerservice.setaddress).toHaveBeenCalledWith('mock', { street: '', addressLine2: '', city: '', state: '', pin: '' });
    expect(component.getaddress).toHaveBeenCalled();
  })

  it('should throw error while add address', () => {
    spyOn(customerservice, 'setaddress').and.returnValue(throwError({error:{message:'error'}}));
    component.addaddress();
    expect(customerservice.setaddress).toHaveBeenCalledWith('mock', { street: '', addressLine2: '', city: '', state: '', pin: '' });
  })

  it('should change address', () => {
    component.changeaddress({_id:''});
    expect(component.addressid).toEqual('');
  })

  it('should update address', () => {
    spyOn(customerservice, 'updateaddress').and.returnValue(of({}));
    spyOn(component, "getaddress");
    component.updateaddress();
    expect(customerservice.updateaddress).toHaveBeenCalledWith('mock', {street: '', addressLine2: '', city: '', state: '', pin: ''}, '');
    expect(component.getaddress).toHaveBeenCalled();
  })

  it('should throw error while update address', () => {
    spyOn(customerservice, 'updateaddress').and.returnValue(throwError({error:{message:'error'}}));
    component.updateaddress();
    expect(customerservice.updateaddress).toHaveBeenCalledWith('mock', {street: '', addressLine2: '', city: '', state: '', pin: ''}, '');
  })

  it('should empty the address', () => {
    component.emptyaddress();
    expect(component.address).toEqual({ street: '', addressLine2: '', city: '', state: '', pin: '' });
  })

  it('should delete address', fakeAsync(() => {
    spyOn(customerservice, 'deleteaddress').and.returnValue(of({}));
    component.deleteaddress('');
    Swal.clickConfirm();
    tick();
    expect(customerservice.deleteaddress).toHaveBeenCalledWith('mock','');
    flush();
  }));

  it('should change password', () => {
    spyOn(customerservice, 'changepassword').and.returnValue(of({}));
    component.changepassword();
    expect(customerservice.changepassword).toHaveBeenCalledWith('mock', {old_password: '', new_password: ''});
  })

  it('should throw error while change password', () => {
    spyOn(customerservice, 'changepassword').and.returnValue(throwError({error:{message:'error'}}));
    component.changepassword();
    expect(customerservice.changepassword).toHaveBeenCalledWith('mock', {old_password: '', new_password: ''});
  })

  it('should delete address', fakeAsync(() => {
    spyOn(customerservice, 'deleteaccount').and.returnValue(of({}));
    spyOn(router, "navigate");
    component.deleteaccount();
    Swal.clickConfirm();
    tick();
    expect(customerservice.deleteaccount).toHaveBeenCalledWith('mock');
    expect(router.navigate).toHaveBeenCalledWith(['']);
    flush();
  }));
});