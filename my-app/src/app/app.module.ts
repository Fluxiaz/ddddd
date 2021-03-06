
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { SeatsComponent } from './seats/seats.component';
import { ContactComponent } from './contact/contact.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SeatsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
