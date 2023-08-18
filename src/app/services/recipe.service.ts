import { Injectable } from '@angular/core';
import { Recipe } from '../models/Recipe';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  //can later refactor this to use config.json, See InTREx appconfigservice for implementation ideas
  private apiUrl = 'https://your-api-url.com'; 

  constructor(private http: HttpClient) { }

  submitRecipe(recipe: Recipe){
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(`${this.apiUrl}/recipe/submit`, recipe, {headers});
  }
}
