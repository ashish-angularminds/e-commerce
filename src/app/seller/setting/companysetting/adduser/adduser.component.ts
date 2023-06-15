import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { SettingService } from '../../../service/setting/setting.service';
import { user } from 'src/app/user';
import { CompanysettingComponent } from '../companysetting.component';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent {
  constructor(private settingservice: SettingService, private toast: NgToastService,
    private parent: CompanysettingComponent) { }

  User: user = {
    email: '',
    password: '',
    name: '',
    role: '',
  }
  creatuser() {
    this.settingservice.createuser(this.User).subscribe(res => {
      this.toast.success({
        detail: 'Registration Successful',
        summary: 'User is Registrated...',
        duration: 3000,
      });
      this.parent.loadlist();
    },
      err => {
        console.log(err);
        this.toast.error({
          detail: 'Registration failed',
          summary: err.error.message,
          duration: 3000,
        });
      });
  }
}
