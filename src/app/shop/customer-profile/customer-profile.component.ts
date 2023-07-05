import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer/customer.service';
import Swal from 'sweetalert2';
import { ImageCroppedEvent, base64ToFile } from 'ngx-image-cropper';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.css']
})
export class CustomerProfileComponent implements OnInit {

  constructor(private service: CustomerService, private loader: NgxUiLoaderService, private router: Router) { }

  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  });

  user: any = {
    name: '',
    email: '',
    picture: ''
  };
  edituser = {
    email: '',
    name: ''
  }
  addresss: any = [];
  address = {
    street: '',
    addressLine2: '',
    city: '',
    state: '',
    pin: ''
  };
  addressflag = false;

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile() {
    this.loader.start();
    this.service.get(localStorage.getItem('loginuser')!).subscribe(
      res => {
        this.user = res;
        this.edituser.name = res.name;
        this.edituser.email = res.email;
        this.loader.stop();
      },
      err => {
        this.loader.stop();
        console.log(err);
      }
    );
  }

  setprofile(payload: any) {
    console.log('fun called');
    this.user = payload;
    console.log(this.user);
  }

  delete() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.removeprofileimg(localStorage.getItem('loginuser')!).subscribe(
          res => {
            this.Toast.fire({
              icon: 'success',
              title: 'Image Removed'
            });
            console.log(res);
            this.getProfile();
          },
          err => {
            this.Toast.fire({
              icon: 'error',
              title: 'Error!'
            });
            console.log(err);
          }
        );
      }
    });
  }


  getaddress() {
    this.service.getaddress(localStorage.getItem('loginuser')!).subscribe(
      res => {
        this.addresss = res;
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }



  /* ---------------------------------------all modals logic-------------------------------------------*/

  editProfile() {
    this.service.updateprofile(localStorage.getItem('loginuser')!, this.edituser).subscribe(
      res => {
        // this.setprofile(res);
        this.user.name = res.name;
        this.user.email = res.email;
        this.user = res;
        this.Toast.fire({
          icon: 'success',
          title: 'Profile Updated'
        });
      },
      err => {
        console.log(err);
        this.Toast.fire({
          icon: 'error',
          title: 'Authentication failed',
          text: err.error.message
        });
      }
    );
  }


  imageChangedEvent: any = '';
  croppedImage: any = '';
  img: any;
  imgfile: any;

  getevent(event: any) {
    this.imageChangedEvent = event;
  }
  fileChangeEvent(event: any): void {
    this.loader.start();
    this.img = URL.createObjectURL(event.addedFiles[0]);
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    this.imgfile = base64ToFile(this.croppedImage);
  }
  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
    this.loader.stop();
  }
  loadImageFailed() {
    // show message
  }


  upload() {
    let file = new FormData();
    this.loader.start();
    file.append('picture', this.imgfile);
    this.service.updateprofileimg(localStorage.getItem('loginuser')!, file).subscribe(
      res => {
        this.user.picture = this.croppedImage;
        this.loader.stop();
        this.Toast.fire({
          icon: 'success',
          title: 'Image Uploaded'
        });
      },
      err => {
        console.log(err);
        this.loader.stop();
        this.Toast.fire({
          icon: 'error',
          title: 'Authentication failed',
          text: err.statusText
        });
      }
    );
  }


  addaddress() {
    this.service.setaddress(localStorage.getItem('loginuser')!, this.address).subscribe(
      res => {
        this.getaddress();
        console.log(res);
        this.Toast.fire({
          icon: 'success',
          title: 'Address added successfully'
        });
        this.address = {
          street: '',
          addressLine2: '',
          city: '',
          state: '',
          pin: ''
        };
      },
      err => {
        console.log(err);
        this.Toast.fire({
          icon: 'error',
          title: 'Authentication failed',
          text: err.error.message
        });
      }
    );
  }

  changeaddress(add: any) {
    this.address = add;
    this.addressid = add._id;
  }

  addressid: string = '';
  updateaddress() {
    console.log(this.address);
    this.service.updateaddress(localStorage.getItem('loginuser')!, this.address, this.addressid).subscribe(
      res => {
        this.getaddress();
        this.Toast.fire({
          icon: 'success',
          title: 'Address updated successfully'
        });
      },
      err => {
        console.log(err);
        this.Toast.fire({
          icon: 'error',
          title: 'Authentication failed',
          text: err.error.message
        });
      }
    );
  }

  emptyaddress() {
    this.address = {
      street: '',
      addressLine2: '',
      city: '',
      state: '',
      pin: ''
    }
  }

  deleteaddress(id: string) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteaddress(localStorage.getItem('loginuser')!, id).subscribe(
          res => {
            this.getaddress();
            this.Toast.fire({
              icon: 'success',
              title: 'Address deleted successfully'
            });
          }
        );
      }
    });
  }

  passwords = {
    old_password: '',
    new_password: ''
  }
  changepassword() {
    this.service.changepassword(localStorage.getItem('loginuser')!, this.passwords).subscribe(
      res => {
        this.Toast.fire({
          icon: 'success',
          title: 'Password changed successfully'
        });
      },
      err => {
        console.log(err);
        this.Toast.fire({
          icon: 'error',
          title: 'Authentication failed',
          text: err.error.message
        });
      }
    );
  }

  deleteaccount() {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.deleteaccount(localStorage.getItem('loginuser')!).subscribe(
          res => {
            this.Toast.fire({
              icon: 'success',
              title: 'Account Deleted successfully'
            });
            console.log(res);
            localStorage.removeItem('loginuser');
            this.router.navigate(['']);
          }
        );
      }
    });
  }
}
