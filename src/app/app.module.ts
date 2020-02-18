import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectorComponent } from './selector/selector.component';
import { ClassSelectorComponent } from './class-selector/class-selector.component';
import { AttributeSelectorComponent } from './attribute-selector/attribute-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    ClassSelectorComponent,
    AttributeSelectorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
