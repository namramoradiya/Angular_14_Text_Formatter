import { Component , Input } from '@angular/core';
import {TextDisplayComponent} from '../text-display/text-display.component'
import {FormattersComponent} from '../formatters/formatters.component'
import { TextStyle } from '../models/text-style.model';
@Component({
  selector: 'app-home',
  // imports: [FormattersComponent,TextDisplayComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

   inputText: string = '';
   outputText: string = '';
   wordCount: number = 0;
   charCount: number = 0;
   fontSize: number = 14;

  //  isBold = false;
  //  isItalic = false;
  //  isUnderline = false;

  textStyle:TextStyle = new TextStyle();

  reverseText() {
    this.outputText = this.inputText.split('').reverse().join('');
  }

  clearText()
  {
    this.inputText = '';
    this.outputText = '';
    this.wordCount = 0;
    this.charCount = 0;
  }

  removeWhiteSpace()
  {
    this.outputText = this.inputText.trim().replace(/\s+/g, '');
  }

  removeSpecialCharacters()
  {
    this.outputText = this.inputText.replace(/[^\w\s]/gi, '');
  }

  onTextChange(newText: string) {
   this.inputText = newText;
   this.calculateCounts();
  }
  
  calculateCounts() {
  const trimmed = this.inputText.trim();

  this.wordCount = trimmed
    ? trimmed.split(/\s+/).length
    : 0;

  this.charCount = this.inputText.length;
}

capitalizeWords()
{
  this.outputText = this.inputText.toUpperCase();
}
// makeBold()
// {
//   this.outputText = `<b>${this.inputText}</b>`;
// }

// makeItalic()
// {
//   this.outputText = `<i>${this.inputText}</i>`;
// }
// makeUnderline()
// {
//   this.outputText = `<u>${this.inputText}</u>`;
// }




// makeBold() {
//   const text = this.outputText || this.inputText;
//   this.outputText = `<b>${text}</b>`;
// }

// makeItalic() {
//   const text = this.outputText || this.inputText;
//   this.outputText = `<i>${text}</i>`;
// }

// makeUnderline() {
//   const text = this.outputText || this.inputText;
//   this.outputText = `<u>${text}</u>`;
// }

// increaseFontSize() {
//   console.log("Increasing font size");
//   this.fontSize += 1;
// }

// decreaseFontSize() {
//   console.log("Decreasing font size");
//   if (this.fontSize > 10) {   
//     this.fontSize -= 1;
//   }
// }

// toggleBold() {
//   this.isBold = !this.isBold;
// }

// toggleItalic() {
//   this.isItalic = !this.isItalic;
// }

// toggleUnderline() {
//   this.isUnderline = !this.isUnderline;
// }

// removeTextStyles() {
//   this.isBold = false;
//   this.isItalic = false;
//   this.isUnderline = false;
//   this.fontSize = 14;
// }

onFormatterAction(action: string) {
  switch(action) {
    case 'REVERSE':
      this.reverseText();
      break;
    case 'CLEAR':
      this.clearText();
      break;
    case 'REMOVE_WHITESPACE':
      this.removeWhiteSpace();
      break;
    case 'REMOVE_SPECIAL_CHAR':
      this.removeSpecialCharacters();
      break;
    case 'CAPITALIZE_WORD':
      this.capitalizeWords();
      break;
    case 'BOLD':
      this.textStyle.toggleBold();
      break;
    case 'ITALIC':
      this.textStyle.toggleItalic();
      break;
    case 'UNDERLINE':
      this.textStyle.toggleUnderline();
      break;
    case 'FONT_INCREASE':
      this.textStyle.increaseFontSize();
      break;
    case 'FONT_DECREASE':
      this.textStyle.decreaseFontSize();
      break;
    case 'REMOVE_STYLE':
      this.textStyle.resetStyles();
      break;
    default:
      break;
  }
}
}