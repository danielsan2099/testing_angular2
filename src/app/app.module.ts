import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroComponent } from './components/heroe/hero.component';
import { MenuComponent } from './components/menu/menu.component';
import { NotifyMeComponent } from './components/notify-me/notify-me.component';
import { HeadSymComponent } from './components/head-sym/head-sym.component';


@NgModule({
  declarations: [
    AppComponent, HeroComponent, MenuComponent, NotifyMeComponent, HeadSymComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
