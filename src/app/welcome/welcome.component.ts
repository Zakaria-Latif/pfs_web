import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  isPhoneviewed=false;
  isBugerOpen=true;
  constructor(private router: Router, public responsive: BreakpointObserver){}

  ngOnInit() {
    this.responsive.observe("(max-width: 800px)")
    .subscribe(result => {
      this.isPhoneviewed = false;
    if (result.matches) {
      this.isPhoneviewed = true;
    } {
      console.log(
      'HandsetPortrait is on'
      );
    }
    });
  }

  toggleBurger(){
    this.isBugerOpen=!this.isBugerOpen;
  }

  navigateTo(route: Array<string>){
    this.router.navigate(route);
    this.toggleBurger();
  }
}
