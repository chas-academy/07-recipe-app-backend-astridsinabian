import { Component, OnInit } from '@angular/core';
import { RecipeYummlyService } from '../../services/recipe-yummly.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn : boolean;

  title:string = 'Recipe App';

  constructor(private recipe: RecipeYummlyService, private router: Router) { }

  ngOnInit() {
    this.recipe.authStatus
    .subscribe(
    value => this.loggedIn = value
    );
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.recipe.remove();
    this.recipe.removeEmail();
    this.recipe.removeUserId();
    this.recipe.changeAuthStatus(false);
    this.router.navigateByUrl('login');
  }

  

}
