import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit() {
    if (localStorage.getItem('activeuser') == null) { this.userava = true }
    else { this.userava = false }
  }
  title = 'e-commerce';
  userava = false;
}
