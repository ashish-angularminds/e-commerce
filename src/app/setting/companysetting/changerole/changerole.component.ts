import { Component, Input } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { SettingService } from 'src/app/service/setting.service';
import { CompanysettingComponent } from '../companysetting.component';

@Component({
  selector: 'app-changerole',
  templateUrl: './changerole.component.html',
  styleUrls: ['./changerole.component.css']
})
export class ChangeroleComponent {

  @Input() selectedid: any;

  constructor(private settingservice: SettingService, private toast: NgToastService,
    private parent: CompanysettingComponent) { }
  
  role = {
    role: ""
  }
  changerole() {
    this.settingservice.changerole(this.role, this.selectedid).subscribe(res => {
      this.toast.success({
        detail: 'Role Changed',
        summary: '...',
        duration: 3000,
      })
      this.parent.loadlist()
      console.log(res);
    },
      err => {
        console.log(err);
      }
    )
  }
}
