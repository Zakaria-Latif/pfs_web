import { Router } from '@angular/router';
// import { MediaService } from 'src/services/media.service';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('myDiv', {static: true}) myDiv: ElementRef | undefined;
  
  searchTerm: string="";
  isFilterClosed: boolean=true;
  isBurgerOpen: boolean=false;
  isPhoneviewed = false;

  isTypingAtSearch=false;
  completions: Array<string>=[]
  
  //this would come from the api
  suggestions: Array<string>=[
    "Test11",
    "Test2",
    "Test33",
    "Test4",
    "Test44",
    "Test14",
  ];


  constructor(private router: Router, public responsive: BreakpointObserver, 
    private elRef: ElementRef){}

  onClick(event: MouseEvent) {
    if (!this.myDiv?.nativeElement.contains(event.target)) {
      // Clicked outside the div, call your method here
      this.isTypingAtSearch=false;
    }
  }

  ngOnInit() {
    document.addEventListener('click', this.onClick.bind(this));


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
    this.isTypingAtSearch=true;
    this.completions=this.suggestions.filter(s=>s.includes(this.searchTerm));
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

  clickOutside(){
    this.isTypingAtSearch=false;
    this.isFilterClosed=true;
  }

  setSearchTerm(newSearchTerm: string){
    console.log("Setting Search Term"+newSearchTerm);
    this.clickOutside();
    this.searchTerm=newSearchTerm;
  }

  isOnEdit=false;
  
  editMatch(id: number){
    this.isOnEdit=!this.isOnEdit;
    console.log(`Editing match with id # ${id}`);
  }

  closeEdit(){
    this.isOnEdit=false;
  }
}
