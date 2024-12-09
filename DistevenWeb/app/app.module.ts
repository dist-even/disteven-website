import { APP_INITIALIZER, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgHttpLoaderModule } from 'ng-http-loader';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { RoughNotationModule } from 'ngx-rough-notation';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page';
import { TopNavComponent, PageNotFoundComponent } from './layout';
import { ApiService, SharedModule, ConfirmWindowComponent, EventEmiterService } from './shared';
import { AboutUsComponent } from './about-us';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    HomePageComponent,
    ConfirmWindowComponent,
    PageNotFoundComponent,
    AboutUsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    NgHttpLoaderModule.forRoot(),
    NgbTooltipModule,
    RoughNotationModule,
  ],
  providers: [
    ApiService,
    EventEmiterService,
    { provide: LOCALE_ID, useValue: 'en-IN'},
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
