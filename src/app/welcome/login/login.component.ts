import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', "./../signup/signup.component.css"]
})
export class LoginComponent implements OnInit{
  constructor(private readonly router: Router, public authService: AuthService){}
  user = {
    username: '',
    password: ''
  };

  ngOnInit(): void{
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        console.log('User is logged in!');
        this.router.navigate(['/home', 'feed']);
      }
    });
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.login(this.user);

  }
}
