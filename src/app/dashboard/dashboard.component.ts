import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router){ }

  generateMenuItems()
  {

  }

  recipeHandlerButtonClicked($myParam: string = ''): void 
  {
    const navigationDetails: string[] = ['/recipes'];
    if($myParam.length) {
      navigationDetails.push($myParam);
    }
    this.router.navigate(navigationDetails);
  }
  pantryInventoryButtonClicked()
  {

  }

}
