import { Component } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {


  imageChangedEvent: any = '';
  croppedImage: any = '';
  img: any;

  getevent(event: any) {
    this.imageChangedEvent = event;
  }
  fileChangeEvent(event: any): void {
    console.log(event);
    // this.imageChangedEvent = event;
    this.img = URL.createObjectURL(event.addedFiles[0]);
    console.log(this.img)
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
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


}
