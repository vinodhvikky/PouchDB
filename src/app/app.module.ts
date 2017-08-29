import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PouchDBService } from "./pouchdb.service";
import { CityFilterPipe } from './citypipe';
@NgModule({
  declarations: [
    AppComponent, CityFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PouchDBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
