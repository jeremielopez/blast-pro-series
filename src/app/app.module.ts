import { RoutingService } from 'src/app/routing/routing.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire';
import { SharedModule } from './shared/shared.module';
import { BootstrapComponent } from './bootstrap/bootstrap.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from '@angular/material';

@NgModule({
  declarations: [BootstrapComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    SharedModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [RoutingService],
  bootstrap: [BootstrapComponent]
})
export class AppModule {}
