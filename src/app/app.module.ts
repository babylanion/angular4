import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
// import { SizerComponent } from './sizer.component';
import {HighlightDirective} from "./highlight.directive";
import { HeroesComponent } from './heroes/heroes.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    // SizerComponent,
    HighlightDirective,
    HeroesComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]


})

export class AppModule { }
