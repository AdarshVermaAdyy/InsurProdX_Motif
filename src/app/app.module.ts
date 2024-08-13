import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent, MotifThemeModule } from '@ey-xd/ng-motif';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardComponent,
    MotifThemeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
