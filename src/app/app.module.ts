import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; 

import { RecipeHandlerComponent } from './recipe-handler/recipe-handler.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RewardsPointsHeaderComponent } from './rewards-points-header/rewards-points-header.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeHandlerComponent,
    DashboardComponent,
    RewardsPointsHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
