import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from'@angular/common/http';
import { TheGreatService } from './services/thegreat.service'

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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TheGreatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
