import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { SettingService } from 'src/app/service/setting.service';
import { CompanysettingComponent } from '../companysetting.component';

@Component({
  selector: 'app-changeinfo',
  templateUrl: './changeinfo.component.html',
  styleUrls: ['./changeinfo.component.css']
})
export class ChangeinfoComponent implements OnInit {

  constructor(private settingservice: SettingService, private toast: NgToastService,
    private parent: CompanysettingComponent) { }

  @Input() selectedid: any;
  // @Output() flag = new EventEmitter<boolean>();

  @Input() infouser = {
    email: '',
    name: ''
  }

  ngOnInit() {
  }

  changeinfo() {
    this.settingservice.changeinfo(this.infouser, this.selectedid).subscribe(
      res => {
        this.toast.success({
          detail: 'Info Changed',
          summary: '...',
          duration: 3000,
        })
        this.parent.loadlist();
      },
      err => {
        this.toast.error({
          detail: '',
          summary: err.message,
          duration: 3000,
        })
        console.log(err);
      }
    )
    console.log(this.infouser);
  }

}
