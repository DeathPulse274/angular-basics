import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectorComponent } from './selector/selector.component';
import { ClassSelectorComponent } from './class-selector/class-selector.component';
import { AttributeSelectorComponent } from './attribute-selector/attribute-selector.component';
import { ServerComponent } from './server/server.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    ClassSelectorComponent,
    AttributeSelectorComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
