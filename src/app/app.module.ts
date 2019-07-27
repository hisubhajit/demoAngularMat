import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogCompComponent } from './dialog-comp/dialog-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents:[DialogCompComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
