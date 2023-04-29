import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-expainded-chat',
  templateUrl: './expainded-chat.component.html',
  styleUrls: ['./expainded-chat.component.css']
})
export class ExpaindedChatComponent implements OnInit{
  id: number=1;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      console.log(id); // or use the id parameter however you need to
    });
  }
}
