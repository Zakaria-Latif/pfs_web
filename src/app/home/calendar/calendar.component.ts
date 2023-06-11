import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  now = new Date();
  daysInMonth = new Date(this.now.getFullYear(), this.now.getMonth()+1, 0).getDate();
  firstDayOfMonth = new Date(this.now.getFullYear(), this.now.getMonth(), 1);
  firstDayOfWeek = this.firstDayOfMonth.getDay();

  days: number[] = []; // Initialize to empty array
  offDays: number[]=[];

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  years = Array.from({length: 10}, (_, i) => new Date().getFullYear() + i);
  selectedDate = { 
    day: 1, 
    month: this.now.toLocaleString('default', { month: 'long' }), 
    year: this.now.getFullYear() 
  };

  ngOnInit() {
    this.days = Array.from({length: this.daysInMonth}, (_, i) => i + 1);
    this.offDays = Array.from({length: this.firstDayOfWeek}, (_, i) => i + 1);
  }

  updateDays() {
    const year = this.selectedDate.year;
    const monthIndex = this.months.indexOf(this.selectedDate.month);
    this.daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    this.firstDayOfMonth = new Date(year, monthIndex, 1);
    this.firstDayOfWeek = this.firstDayOfMonth.getDay();
    this.days = Array.from({length: this.daysInMonth}, (_, i) => i + 1);
    this.offDays = Array.from({length: this.firstDayOfWeek}, (_, i) => i + 1);
  }
}
