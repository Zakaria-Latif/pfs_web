import { Component } from '@angular/core';
// import 'animate.css';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  filterType: string="Matches";
  minRate: number=0;
  
  setFilterType(type: string){
    this.filterType=type;
  }
  handleRate(event: Event){
    const inputElement = event.target as HTMLInputElement;
    this.minRate = parseFloat(inputElement.value);

  }
}
