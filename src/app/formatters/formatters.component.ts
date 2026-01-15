import { Component, EventEmitter, Output , Input } from '@angular/core';
import { FormatterAction } from '../shared/enums/formatter-action.enum';
// import {HomeComponent} from '../home/home.component';
// import {TextDisplayComponent} from '../text-display/text-display.component'
@Component({
  selector: 'app-formatters',
  // imports: [],
  templateUrl: './formatters.component.html',
  styleUrls: ['./formatters.component.css']
})
export class FormattersComponent {

//   @Output() reverseClicked = new EventEmitter<void>();
//   @Output() clearClicked = new EventEmitter<void>();
//   @Output() whiteSpaceRemoveClicked = new EventEmitter<void>();
//   @Output() removeSpecialCharClicked = new EventEmitter<void>();
//   @Output() capitalizeWordClicked = new EventEmitter<void>();
//   @Output() boldClicked = new EventEmitter<void>();
//   @Output() italicClicked = new EventEmitter<void>();
//   @Output() underlineClicked = new EventEmitter<void>();
//   @Output() fontIncreaseClicked = new EventEmitter<void>();
//   @Output() fontDecreaseClicked = new EventEmitter<void>();
//   @Output() removeStyleClicked = new EventEmitter<void>();
//   @Input() wordCount: number = 0;
//   @Input() charCount: number = 0;

//   onReverse() {
//     this.reverseClicked.emit(); 
// }  

//   onClear()
//   {
//     this.clearClicked.emit();
//   }

//   onWhiteSpaceRemove()
//   {
//     this.whiteSpaceRemoveClicked.emit();
//   }

//   onRemoveSpecialChar()
//   {
//     this.removeSpecialCharClicked.emit();
//   }

//   onCapitalizeWord()
//   {
//     this.capitalizeWordClicked.emit();
//   }

//   onBold()
//   {
//     this.boldClicked.emit();
//   }

//   onItalic()
//   {
//     this.italicClicked.emit();
//   }

//   onUnderline()
//   {
//     this.underlineClicked.emit();
//   }

//   onFontIncrease()
//   {
//     this.fontIncreaseClicked.emit();
//   }
//   onFontDecrease()
//   {
//     this.fontDecreaseClicked.emit();
//   }

//   onRemoveStyle()
//   {
//     this.removeStyleClicked.emit();
//   }


  @Output() actionClicked = new EventEmitter<FormatterAction>();
  @Input() wordCount:number=0;
  @Input() charCount:number=0;
  FormatterAction = FormatterAction;

  onAction(action: FormatterAction) {
    this.actionClicked.emit(action);
  }

}

