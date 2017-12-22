import { RouterModule, Routes } from '@angular/router';

import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import {ListComponent} from "./users/list/list.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  /*{ path: 'users', component: UsersComponent },*/
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: ListComponent },
  { path: '**', component: HomeComponent }
];

export const AppRouterModule = RouterModule.forRoot(routes);
