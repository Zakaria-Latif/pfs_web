import { Router } from '@angular/router';
// import { MediaService } from 'src/services/media.service';
import { Component } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchTerm: string="";
  isFilterClosed: boolean=true;
  isBurgerOpen: boolean=false;
  isPhoneviewed = false;
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

  
  onSearchInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchTerm = value;
  }

  toggleFilter(){
    this.isFilterClosed=!this.isFilterClosed;
  }

  toggleBurger(){
    this.isBurgerOpen=!this.isBurgerOpen;
  }
  
  search(event: Event){
    event.preventDefault();
    this.router.navigate(["/home", "search"], { queryParams: { q: this.searchTerm }, queryParamsHandling: 'merge' });
  }
}
