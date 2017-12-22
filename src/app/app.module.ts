import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './users/login/login.component';
import { AppRouterModule } from './app.routes';
import { RegisterComponent } from './users/register/register.component';

import { fakeBackendProvider } from './fake-http-interceptor';
import { ListComponent } from './users/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    // provider used to create fake backend
    fakeBackendProvider
/*    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendProvider,
      multi: true
    }*/
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
