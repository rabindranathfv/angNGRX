import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongComponent } from './components/counter/song/song.component';
import { GrandsongComponent } from './components/counter/grandsong/grandsong.component';

// ngrx
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { countReducer } from './components/counter/counter.reducer';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    SongComponent,
    GrandsongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counter: countReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
