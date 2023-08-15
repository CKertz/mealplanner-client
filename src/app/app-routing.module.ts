import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipeHandlerComponent } from './recipe-handler/recipe-handler.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'recipes', component: RecipeHandlerComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }