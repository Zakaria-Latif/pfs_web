import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  constructor(private readonly router: Router){}
  signup(){
    //just for now
    this.router.navigate(['/home', 'feed']);
  }

  user = {
    username: '',
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
