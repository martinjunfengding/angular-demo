import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LazyModModule } from '~martin/app/lazy-mod/lazy-mod.module'
import { AppComponent } from './app.component';
import { CompBComponent } from './components/comp-b/comp-b.component';
import { CompAComponent } from './components/comp-a/comp-a.component';

@NgModule({
  declarations: [
    AppComponent,
    CompAComponent,
    CompBComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
