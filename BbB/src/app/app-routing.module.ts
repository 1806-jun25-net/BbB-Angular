import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { LocationComponent } from './location/location.component';
import { LocationDetailComponent } from './location-detail/location-detail.component';
import { MenuComponent } from './menu/menu.component';
import { ArchiveComponent } from './archive/archive.component';
import { ArchiveDetailComponent } from './archive-detail/archive-detail.component';

const appRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  { path: "location", component: LocationComponent },
  { path: "location/:id", component: LocationDetailComponent },
  { path: "location/:id/menu", component: MenuComponent },
  { path: "archive", component: ArchiveComponent },
  { path: "archive/:id", component: ArchiveDetailComponent },
  { path: "**", redirectTo: 'login'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {  }
