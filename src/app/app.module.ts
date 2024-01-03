import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SixCardsComponent } from './six-cards/six-cards.component';
import { TwelveCardsComponent } from './twelve-cards/twelve-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    SixCardsComponent,
    TwelveCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
