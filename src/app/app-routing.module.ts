import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthPage } from './pages/auth/auth.page';
import { ExamplePage } from './pages/example/example.page';

const routes: Routes = [
  { path: 'auth', component: AuthPage },
  { path: 'example', component: ExamplePage },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
