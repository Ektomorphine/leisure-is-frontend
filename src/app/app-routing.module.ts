import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthPage } from './pages/auth/auth.page';
import { ExamplePage } from './pages/example/example.page';
import { Angular2TokenService } from 'angular2-token';
import { UserProfilePage } from './pages/user-profile/user-profile.page';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'auth', component: AuthPage },
  {
    path: 'example',
    component: ExamplePage,
    canActivate: [Angular2TokenService]
  },
  {
    path: 'profile',
    component: UserProfilePage,
    canActivate: [Angular2TokenService]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
