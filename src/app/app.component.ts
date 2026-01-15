import { Component } from '@angular/core';
import { FormattersComponent } from './formatters/formatters.component';
import { TextDisplayComponent } from './text-display/text-display.component';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  // imports: [HomeComponent,TextDisplayComponent,FormattersComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Text-Formatter';
}
