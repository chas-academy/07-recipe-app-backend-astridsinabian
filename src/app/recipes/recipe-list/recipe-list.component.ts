import { Component, OnInit } from '@angular/core';
import { RecipeYummlyService } from '../../services/recipe-yummly.service';
import { Recipe } from '../../models/Recipe';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes:Recipe[] = [];
  searchString: string;
  foundRecipes: string;
  recipesUrl: string = 'http://api.yummly.com/v1/api/recipes?_app_id=7e6d90e7&_app_key=f2b54716a627719e4b1fa6ac962e6ac6';
  recipeId;
  
  constructor(
    private recipeService:RecipeYummlyService, 
    private http: HttpClient
    ) { }

  ngOnInit() {
    this.recipeService
    .getRecipe()
    .subscribe((result) => {
      this.recipes = (<any>result).matches
    });

  }

  search() {
    let query = this.recipesUrl + '&q=' + this.searchString;
    this.http.get(query).subscribe((result) => {
    this.recipes = (<any>result).matches
    });

     }
    
  filterAppetizers(e) {
    if(e.target.checked) {
     let query = `${this.recipesUrl}&q=${this.searchString}&allowedCourse[]=course^course-Appetizers`;
     this.http.get(query).subscribe((result) => {
     this.recipes = (<any>result).matches
     });
    }
  }

  filterMainDishes(e) {
    if(e.target.checked) {
     let query = `${this.recipesUrl}&q=${this.searchString}&allowedCourse[]=course^course-Maindishes`;
     this.http.get(query).subscribe((result) => {
     this.recipes = (<any>result).matches
     });
    }
  }

  filterDesserts(e) {
    if(e.target.checked) {
     let query = `${this.recipesUrl}&q=${this.searchString}&allowedCourse[]=course^course-Desserts`;
     this.http.get(query).subscribe((result) => {
     this.recipes = (<any>result).matches
     });
    }
  }

  filterGluten(e) {
    if(e.target.checked) {
     let query = `${this.recipesUrl}&q=${this.searchString}&allowedAllergy[]=396^Dairy-Free&allowedAllergy[]=393^Gluten-Free`;
     this.http.get(query).subscribe((result) => {
     this.recipes = (<any>result).matches
     });
    }
  }

  filterVegetarian(e) {
    if(e.target.checked) {
     let query = `${this.recipesUrl}&q=${this.searchString}&allowedDiet[]=390^Pescetarian&allowedDiet[]=388^Vegetarian`;
     this.http.get(query).subscribe((result) => {
     this.recipes = (<any>result).matches
     });
    }
  }

}
