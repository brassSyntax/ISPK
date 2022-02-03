import {Component, Inject, Input, OnInit} from '@angular/core';
import {AccountService} from "../services/account.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  hide = true;
  usernameInput: string = '';
  passwordInput: string = '';

  constructor(public account:AccountService) { }

  ngOnInit(): void {
  }

  onSubmit(login : NgForm) {
    console.log(this.usernameInput);
    console.log(this.passwordInput);
    this.account.login(this.usernameInput, this.passwordInput)
      .subscribe();
      login.reset();
    }

  onLogout(){
    this.account.logout();
  }


}
