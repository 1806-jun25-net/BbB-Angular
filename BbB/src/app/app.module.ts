import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LocationComponent } from './location/location.component';
import { ArchiveComponent } from './archive/archive.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { ArchiveDetailComponent } from './archive-detail/archive-detail.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    ArchiveComponent,
    LoginComponent,
    LogoutComponent,
    LocationDetailComponent,
    ArchiveDetailComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
