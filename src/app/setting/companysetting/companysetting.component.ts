import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { Observable, bufferToggle } from 'rxjs';
import { SettingService } from 'src/app/service/setting.service';
import { user } from 'src/app/user';

@Component({
  selector: 'app-companysetting',
  templateUrl: './companysetting.component.html',
  styleUrls: ['./companysetting.component.css']
})
export class CompanysettingComponent implements OnInit {

  constructor(private settingservice: SettingService, private toast: NgToastService) { }

  User: user = {
    email: '',
    password: '',
    name: '',
    role: '',
  }

  org = {
    name: '',
    email: ''
  }
  orgflag = true;

  pagination = {
    sortBy: 'role',
    limit: 5,
    page: 1
  }

  role = {
    role: ""
  }
  infouser = {
    email: '',
    password: '',
    name: ''
  };

  selectedid: any = '';

  pages: number[] = [];
  users: any[] = [];
  ngOnInit() {
    this.loadlist();
    this.settingservice.getuser({}).subscribe(data => {
      console.log(this.users.length)
      for (let i = 0; i <= data.length / 5; i++) {
        this.pages.push(i);
      }
    });
  }

  creatuser() {
    this.settingservice.createuser(this.User).subscribe(res => {
      console.log(res);
      this.users.push(this.User);
      this.toast.success({
        detail: 'Registration Successful',
        summary: 'User is Registrated...',
        duration: 3000,
      });
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

  loadlist() {
    this.settingservice.getuser(this.pagination).subscribe(data => this.users = data);
  }

  changepage(id: number) {
    this.pagination.page = id;
    this.loadlist();
  }

  updateorg() {
    this.orgflag = this.orgflag ? false : true;

    if (this.orgflag) {
      this.settingservice.updateorg(this.org).subscribe(data => console.log(data));
      this.loadlist();
    }
    else {
      this.org.name = this.users!.at(0)!._org!.name as string;
      this.org.email = this.users!.at(0)!._org!.email as string;
    }
  }

  changerole() {
    this.settingservice.changerole(this.role, this.selectedid).subscribe(res => {
      this.toast.success({
        detail: 'Role Changed',
        summary: '...',
        duration: 3000,
      })
      this.loadlist()
      console.log(res);
    },
      err => {
        console.log(err);
      }
    )
  }
  changeinfo() {
    this.settingservice.changeinfo(this.infouser, this.selectedid).subscribe(
      res => {
        this.toast.success({
          detail: 'Info Changed',
          summary: '...',
          duration: 3000,
        })
        this.loadlist();
      },
      err => {
        console.log(err);
      }
    )
    console.log(this.infouser);
  }

  deleteuser() {
    this.settingservice.deleteuser(this.selectedid).subscribe(
      res => {
        this.toast.success({
          detail: 'User Deleted',
          summary: '...',
          duration: 3000,
        })
        this.loadlist();
        console.log(res);
      },
      err => {
        console.log(err);
        console.log(this.selectedid);
      }
    );
  }
}
