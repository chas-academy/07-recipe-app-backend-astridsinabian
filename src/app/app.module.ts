import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RecipeYummlyService } from './services/recipe-yummly.service';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { ProfileComponent } from './users/profile/profile.component';
import { NavbarComponent } from './recipes/navbar/navbar.component';
import { SavedComponent } from './recipes/saved/saved.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { HomeComponent } from './recipes/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    routingComponents,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    SavedComponent,
    HomeComponent,
    NotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,

  ],
  providers: [RecipeYummlyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
