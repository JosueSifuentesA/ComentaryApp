import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { FormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),HttpClient,HttpClientModule,FormsModule,provideHttpClient(withFetch())]
};
