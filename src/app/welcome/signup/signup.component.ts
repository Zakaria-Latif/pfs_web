import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  constructor(private readonly router: Router, 
    public readonly authService: AuthService,
    private formBuilder: FormBuilder){}

  user = {
    username: '',
    email: '',
    password: ''
  };

  signupForm: FormGroup | undefined;

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe(isLoggedIn => {
      if (isLoggedIn) {
        console.log('User is logged in!');
        this.router.navigate(['/home', 'feed']);
      }
    });

    this.signupForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(ngForm: NgForm){
    if (ngForm.invalid) {
      console.log("Invalid user");
      return;
    }
    console.log(this.user);
    this.authService.signup(this.user);
  }

}
