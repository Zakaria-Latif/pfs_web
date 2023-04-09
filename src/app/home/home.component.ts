import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MediaService } from 'src/services/media.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchTerm: string="";
  isFilterClosed: boolean=true;

  constructor(private router: Router){}
  
  onSearchInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchTerm = value;
  }

  toggleFilter(){
    this.isFilterClosed=!this.isFilterClosed;
  }
  
  search(event: Event){
    event.preventDefault();
    this.router.navigate(["/home", "search"], { queryParams: { q: this.searchTerm }, queryParamsHandling: 'merge' });
  }
}
