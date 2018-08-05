import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LocationComponent } from './location/location.component';
import { ArchiveComponent } from './archive/archive.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { ArchiveDetailComponent } from './archive-detail/archive-detail.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { RouterModule } from '../../node_modules/@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    ArchiveComponent,
    LoginComponent,
    LogoutComponent,
    LocationDetailComponent,
    ArchiveDetailComponent
  ],
  imports: [
    FormsModule,         // for ngModel
    HttpClientModule,    // for HttpClient
    BrowserModule,
    AppRoutingModule,
    RouterModule         // for router-outlet directive
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
