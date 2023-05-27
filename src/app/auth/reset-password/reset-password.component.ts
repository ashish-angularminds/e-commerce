import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute, private service: AuthService,
    private toast: NgToastService, private router: Router) { }

  password!: string;
  confirmpassword!: string;
  token: any
  ngOnInit(): void {
    this.token = this.activatedroute.snapshot.queryParams;
  }

  reset() {
    if (this.password == this.confirmpassword) {
      this.service.resetpassword({ password: this.password }, this.token).subscribe(
        res => {
          this.toast.success({
            detail: 'Password Reset',
            duration: 3000
          })
          this.router.navigate(['auth/login']);
        },
        err => {
          this.toast.error({
            summary: err.error.message,
            duration: 3000
          })
        }
      )
    }
    else {
      this.toast.error({
        detail: "Password and Confirmpassword dosen't match!",
        duration: 3000
      })
    }
  }
}
