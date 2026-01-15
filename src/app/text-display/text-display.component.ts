import { Component,Input,Output,EventEmitter } from '@angular/core';
// import {HomeComponent} from '../home/home.component';
// import {FormattersComponent} from '../formatters/formatters.component'
@Component({
  selector: 'app-text-display',
  // imports: [],
  templateUrl: './text-display.component.html',
  styleUrls: ['./text-display.component.css']
})
export class TextDisplayComponent {

      @Input() inputText: string = '';
      @Input() outputText: string = '';
      @Input() isBold: boolean = false;
      @Input() isItalic: boolean = false;
      @Input() isUnderline: boolean = false;
      @Input() fontSize: number = 14;

      @Output() textChanged = new EventEmitter<string>();

  // onTextChange(value: string) {
  //   this.textChanged.emit(value);
  // }


  onTextChange(event: Event): void {
  const textarea = event.target as HTMLTextAreaElement;
  this.textChanged.emit(textarea.value);
}

  // onTextChange(event: Event): void {
  //   const target = event.target as HTMLInputElement | null;
  //   const value = target ? target.value : '';
  //   this.textChanged.emit(value);
  // }
}
