import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor( private auth: AuthService) { }

  ngOnInit() {
  }
  login(){
    this.auth.googleLogin();
    console.log("ok");
  }
  signOut(){
    this.auth.signOut();
  }

}
