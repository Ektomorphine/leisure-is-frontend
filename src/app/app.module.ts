import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Angular2TokenService } from 'angular2-token';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { AuthPage } from './pages/auth/auth.page';
import { ExamplePage } from './pages/example/example.page';
import { UserProfilePage } from './pages/user-profile/user-profile.page';
import { EventsListPage } from './pages/events-list/events-list.page';

import { AuthService } from './services/auth.service';
import { GenericService } from './services/generic.service';
import { EventsService } from './services/events.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthPage,
    ExamplePage,
    HeaderComponent,
    UserProfilePage,
    EventsListPage,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    HttpModule,
  ],
  providers: [Angular2TokenService, AuthService, GenericService, EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
