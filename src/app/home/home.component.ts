import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  search(event: Event){
    event.preventDefault();
    console.log("Searching");
  }
}
