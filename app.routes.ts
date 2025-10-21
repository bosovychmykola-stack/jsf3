import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login.component';
import { NewsComponent } from './news.component';
import { ProfileComponent } from './profile.component';
import { authGuard } from './auth.guard';
import { NotFoundComponent } from './not-found.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'news', component: NewsComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
  { path: 'profile/**', redirectTo: 'profile' },
  { path: '**', component: NotFoundComponent }
];
