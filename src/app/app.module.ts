import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogCompComponent } from './dialog-comp/dialog-comp.component';
import { DataServiceService } from './data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    DialogCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  entryComponents:[DialogCompComponent],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
