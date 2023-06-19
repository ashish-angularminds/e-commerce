import { Component, Input } from '@angular/core';
import { CustomerService } from '../services/customer/customer.service';
import { ImageCroppedEvent, base64ToFile } from 'ngx-image-cropper';

@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent {

  @Input() setprofile = (res: any): void => { };
  edituser = {
    email: '',
    name: ''
  }
  @Input() user: any;

  constructor(private service: CustomerService) { }

  editProfile() {
    this.service.updateprofile(localStorage.getItem('loginuser')!, this.edituser).subscribe(
      res => {
        // this.setprofile(res);
        this.user.name = res.name;
        this.user.email = res.email;
        this.user = res;
      },
      err => {
        console.log(err);
      }
    );
  }


  imageChangedEvent: any = '';
  croppedImage: any = '';
  img: any;
  imgfile: any;
  file = new FormData();

  getevent(event: any) {
    this.imageChangedEvent = event;
  }
  fileChangeEvent(event: any): void {
    console.log(event);
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
  }
  loadImageFailed() {
    // show message
  }


  upload() {
    this.file.append('picture', this.imgfile);
    this.service.updateprofileimg(localStorage.getItem('loginuser')!, this.file).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
    this.user.picture = this.croppedImage;
  }
}
