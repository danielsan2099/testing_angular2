import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroComponent } from './hero.component';
import { MenuComponent } from './menu/menu.component';
import { NotifyMeComponent } from './notify-me/notify-me.component';


@NgModule({
  declarations: [
    AppComponent, HeroComponent, MenuComponent, NotifyMeComponent
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
