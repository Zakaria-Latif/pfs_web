import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', "./../signup/signup.component.css"]
})
export class LoginComponent {
  constructor(private readonly router: Router){}
  login(){
    //just for now
    this.router.navigate(['/home', 'feed']);
  }

  user = {
    email: '',
    password: ''
  };

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    console.log(this.user);
    //just for now
    this.router.navigate(['/home', 'feed']);

  }
}
