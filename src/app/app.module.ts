import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WetTableComponent } from './wet-table/wet-table.component';
import { WetTable2Component } from './wet-table-2/wet-table-2.component';
import { RandomContentComponent } from './random-content/random-content.component';

const appRoutes: Routes = [
  { path: 'wet-table', component: WetTableComponent },
  { path: 'wet-table-2',      component: WetTable2Component },
];

@NgModule({
  declarations: [
    AppComponent,
    WetTableComponent,
    WetTable2Component,
    RandomContentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
