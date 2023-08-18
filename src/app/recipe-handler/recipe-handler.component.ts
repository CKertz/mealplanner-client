import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/Ingredient';
import { Recipe } from '../models/Recipe';
import { RecipeService } from '../services/recipe.service';


@Component({
  selector: 'app-recipe-handler',
  templateUrl: './recipe-handler.component.html',
  styleUrls: ['./recipe-handler.component.css']
})
export class RecipeHandlerComponent {

  constructor(
    private recipeService: RecipeService
  ){}

  recipe: Recipe = new Recipe();
  ingredientList: Ingredient[] = [{
    ingredientName: '', 
    ingredientAmount: '', 
    measurementType: '' ,
  }];
  
  addIngredient() {
    const newRow = { ingredientName: '', ingredientAmount: '', measurementType: '' };
    this.ingredientList.push(newRow);
  }

  removeIngredient(i: number){
    if (i >= 0 && i < this.ingredientList.length) {
      this.ingredientList.splice(i, 1);
    } else {
        console.log("Invalid index to remove.");
    }
  }

  submit(){
    this.recipe.ingredients = this.ingredientList;
    this.recipeService.submitRecipe(this.recipe);
  }
}
