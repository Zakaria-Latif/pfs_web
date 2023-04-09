import { HostListener, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaService {
  public windowWidth: number;
  constructor() { 
    this.windowWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    if(event.target)this.windowWidth = (event.target as Window).innerWidth;
  }
}
