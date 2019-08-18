import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { RecipeSearchResult, Recipe } from '../models/Recipe';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class RecipeYummlyService {

  recipesUrl:string = 'http://api.yummly.com/v1/api/recipes?_app_id=7e6d90e7&_app_key=f2b54716a627719e4b1fa6ac962e6ac6';

  recipesSearchUrl: string = 'http://api.yummly.com/v1/api/recipes?_app_id=7e6d90e7&_app_key=f2b54716a627719e4b1fa6ac962e6ac6&q=';

  private userUrl = 'http://recipe-app.astridsinabian.se/api';
  private iss = {
    login : 'http://recipe-app.astridsinabian.se/api/login',
    register : 'http://recipe-app.astridsinabian.se/api/register'
  }

  private loggedInView = new BehaviorSubject<boolean>(this.loggedIn());
  authStatus = this.loggedInView.asObservable();

  constructor(private http:HttpClient) { }

  getRecipe(): Observable<RecipeSearchResult> {
    return this.http.get<RecipeSearchResult>(this.recipesUrl);
  }

  getRecipeById(recipeId: string): Observable<Recipe> {
    return this.http.get<Recipe>(`http://api.yummly.com/v1/api/recipe/${recipeId}?_app_id=7e6d90e7&_app_key=f2b54716a627719e4b1fa6ac962e6ac6`);
  }

  register(data) {
    return this.http.post(`${this.userUrl}/register`, data)
  }

  login(data) {
    return this.http.post(`${this.userUrl}/login`, data)
  }

  handle(token, email, id) {
    this.set(token);
    this.setEmail(email);
    this.setUserId(id);
  }

  set(token) {
    localStorage.setItem('token', token);
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
  }

  getUserId() {
    return localStorage.getItem('user_id');
  }

  setUserId(id) {
    localStorage.setItem('user_id', id)
  }

  removeUserId() {
    localStorage.removeItem('user_id');
  }

  isValid() {
    const token = this.get();
    if(token) {
      const payload = this.payload(token);
      if(payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false
      }
    }

    return false;
  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }

  changeAuthStatus(value : boolean) {
    this.loggedInView.next(value);
  }

  getEmail() {
    return localStorage.getItem('email');
  }
  
  setEmail(email) {
    localStorage.setItem('email', email);
  }

  removeEmail() {
    localStorage.removeItem('email');
  }

}
