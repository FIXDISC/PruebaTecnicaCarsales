import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { EpisodiosComponent } from './episodios/episodios.component';
import { HttpClientModule } from '@angular/common/http';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { AppState, rootReducer, INITIAL_STATE } from './store';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgReduxModule,
    RouterModule.forRoot([
      { path: '', component: EpisodiosComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    EpisodiosComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(ngRedux: NgRedux<AppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}

