import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GenerateMenuService {
  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  generateRecipes() {
    return this.http.get(`${this.apiUrl}/endpoint`);
  }
}
