import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { AuthService } from '../../service/auth/auth.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  constructor(private activeroute: ActivatedRoute, private authservice: AuthService,
    private toast: NgToastService, private router: Router) { }

  ngOnInit(): void {
    this.authservice.verifyaccount(this.activeroute.snapshot.queryParams).subscribe(
      res => {
        console.log(res);
        this.toast.success({
          detail: 'Email is verified successfully',
          summary: '',
          duration: 3000
        });
        this.router.navigate(['']);
      },
      err => {
        console.log(err);
        this.toast.error({
          detail: 'Email verifiction failed',
          summary: err.error.message,
          duration: 3000
        });
        this.router.navigate(['']);
      }
    )
  }
}
