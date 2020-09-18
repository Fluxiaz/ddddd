import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { SeatsComponent } from './seats/seats.component';

const routes: Routes = [

  {
    path: '',
    component: AppComponent
  },
  {
    path:'seats',
    component: SeatsComponent
  },
  {
    path:'contact',
    component: ContactComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
