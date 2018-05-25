import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Angular2TokenService } from 'angular2-token';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

import { AuthPage } from './pages/auth/auth.page';
import { ExamplePage } from './pages/example/example.page';
import { UserProfilePage } from './pages/user-profile/user-profile.page';
import { EventsListPage } from './pages/events-list/events-list.page';
import { EventDetailsPage } from './pages/event-details/event-details.page';
import { SignUpPage } from './pages/signup/signup.page';

import { AuthService } from './services/auth.service';
import { GenericService } from './services/generic.service';
import { EventsService } from './services/events.service';
import { BookmarkService } from './services/bookmark.service';
import { CommentsService } from './services/comments.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthPage,
    ExamplePage,
    HeaderComponent,
    UserProfilePage,
    EventsListPage,
    EventDetailsPage,
    SignUpPage,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAJpNdPmP9LBrXcDyoqA3SX9R8sFVdwCtk',
    }),
  ],
  providers: [
    Angular2TokenService,
    AuthService,
    GenericService,
    EventsService,
    BookmarkService,
    CommentsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
