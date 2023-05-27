import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { SettingService } from 'src/app/service/setting.service';

@Component({
  selector: 'app-changemypassword',
  templateUrl: './changemypassword.component.html',
  styleUrls: ['./changemypassword.component.css']
})
export class ChangemypasswordComponent {

  constructor(private service: SettingService, private toast: NgToastService) { }

  password = {
    old_password: '',
    new_password: ''
  }
  changepassword() {
    this.service.changepassword(this.password).subscribe(
      res => {
        this.toast.success({
          detail: 'Password Changed',
          summary: '...',
          duration: 3000,
        })
      },
      err => {
        this.toast.error({
          detail: 'Failed',
          summary: err.error.message,
          duration: 3000
        })
      }
    )
  }
}
