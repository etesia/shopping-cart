import { LoginComponent } from './../login/login.component';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  constructor(private LoginComponent: LoginComponent) { }
  username;
  ngOnInit(): void {
  }

  PasswordLogin () {
    console.log("Acc user name:", this.username);
    this.LoginComponent.loginByAcc();
  }
}
