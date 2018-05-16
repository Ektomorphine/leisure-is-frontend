import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthPage } from './pages/auth/auth.page';
import { ExamplePage } from './pages/example/example.page';
import { EventsListPage } from './pages/events-list/events-list.page';
import { Angular2TokenService } from 'angular2-token';
import { UserProfilePage } from './pages/user-profile/user-profile.page';
import { EventDetailsPage } from './pages/event-details/event-details.page';
import { SignUpPage } from './pages/signup/signup.page';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthPage },
  {
    path: 'example',
    component: ExamplePage,
    canActivate: [Angular2TokenService],
  },
  {
    path: 'profile',
    component: UserProfilePage,
    canActivate: [Angular2TokenService],
  },
  {
    path: 'events',
    component: EventsListPage,
    canActivate: [Angular2TokenService],
  },
  {
    path: 'event/:id',
    component: EventDetailsPage,
    canActivate: [Angular2TokenService],
  },
  {
    path: 'signup',
    component: SignUpPage,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
