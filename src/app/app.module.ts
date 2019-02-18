import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongComponent } from './components/counter/song/song.component';
import { GrandsongComponent } from './components/counter/grandsong/grandsong.component';

@NgModule({
  declarations: [
    AppComponent,
    SongComponent,
    GrandsongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
