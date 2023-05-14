import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-completions',
  templateUrl: './completions.component.html',
  styleUrls: ['./completions.component.css']
})
export class CompletionsComponent {
  @Input() suggestions: Array<string>=[
    "Test11",
    "Test2",
    "Test33",
    "Test4",
    "Test44",
    "Test14",
  ]

  @Input() currentSuggestion="";

  @Output() dispatchSuggestion: EventEmitter<string> = new EventEmitter<string>();

  selectSuggestion(suggestion: string){
    this.dispatchSuggestion.emit(suggestion);
    console.log("Emitting");
  }
}
