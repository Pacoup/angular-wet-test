import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WetTableComponent } from './wet-table/wet-table.component';
import { RandomContentComponent } from './random-content/random-content.component';


@NgModule({
  declarations: [
    AppComponent,
    WetTableComponent,
    RandomContentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
