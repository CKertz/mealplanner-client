import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GenerateMenuService } from '../services/generate-menu.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  
  constructor(private router: Router, private generateMenu: GenerateMenuService){ }

  generateMenuItems(){
    this.generateMenu.generateRecipes();
  }

  recipeHandlerButtonClicked($routeParam: string = ''): void {
    const navigationDetails: string[] = ['/recipes'];
    if($routeParam.length) {
      navigationDetails.push($routeParam);
    }
    this.router.navigate(navigationDetails);
  }

  pantryInventoryButtonClicked() {

  }

}
