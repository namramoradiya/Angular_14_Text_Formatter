import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormattersComponent } from './formatters/formatters.component';
import { TextDisplayComponent } from './text-display/text-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormattersComponent,
    TextDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
