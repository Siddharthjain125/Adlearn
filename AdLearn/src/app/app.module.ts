import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatListModule} from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms'; 
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms'; 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClientModule } from '@angular/common/http';
import {AppRoutingModule} from './app-routing/app-routing.module';

import { baseURL } from './shared/baseurl';

import 'hammerjs';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RouterOutlet } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [

    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatSelectModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatSliderModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatGridListModule
  ],
  entryComponents: [
    LoginComponent,
    SignupComponent
  ],
  providers: [
    {provide: 'BaseURL', useValue: baseURL},
    RouterOutlet
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
