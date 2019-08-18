import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/Recipe';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeYummlyService } from 'src/app/services/recipe-yummly.service';
import { SavedRecipe } from 'src/app/models/SavedRecipe';
import { RecipesService } from 'src/app/services/recipes.service';
import { Profilelist } from 'src/app/models/Profilelist';


@Component({
  selector: 'app-recipes-details,',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {


  recipe: Recipe;
  recipeId;
  email;
  list_id;
  id;
  profilelists: Profilelist[];

  addRecipeModal = false;

  constructor(
    private route: ActivatedRoute,
    private recipeYummlyService: RecipeYummlyService,
    private router: Router,
    private recipeservice: RecipesService,
  ) {
    this.recipeId = this.route.snapshot.paramMap.get('id');
  }
 
  ngOnInit(): void {

   this.getRecipeById();
   this.getProfilelist();
   
  }

  getRecipeById() {
    
    this.recipeYummlyService.getRecipeById(this.recipeId)
    .subscribe(data => {
      this.recipe = data;
    })

  }

  getListByEmail() {

    this.recipeservice.getProfilelists(this.email)
    .subscribe(data => {
      this.recipe = data;
    })

  }

  addRecipes(list_id: number) {

    const recipeAddToList = new SavedRecipe();
    recipeAddToList.name = this.recipe.name;
    recipeAddToList.email = this.recipeYummlyService.getEmail();
    recipeAddToList.list_id = list_id;

    this.recipeservice.addRecipes(recipeAddToList)
    .subscribe(result => {
      this.router.navigateByUrl('/profile');
    });

  }

  
  getProfilelist(): void {
    let email = this.recipeYummlyService.getEmail();

    this.recipeservice.getProfilelists(email).subscribe(data => {

      let arr = [];

      for (let i = 0; i < 100; i++) {
        
        if(data[i] != undefined) arr.push(data[i]);

      }

      this.profilelists = arr;

     }); 
  }

}
