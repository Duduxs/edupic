import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PhotoModule } from './components/photos/photo.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhotoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
