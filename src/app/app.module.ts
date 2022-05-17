import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReversalComponent } from './components/reversal/reversal.component';
import { AnagramComponent } from './components/anagram/anagram.component';
import { PrimenumberComponent } from './components/primenumber/primenumber.component';
import { PrimelistComponent } from './components/primelist/primelist.component';

@NgModule({
  declarations: [
    AppComponent,
    ReversalComponent,
    AnagramComponent,
    PrimenumberComponent,
    PrimelistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
