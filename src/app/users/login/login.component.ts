import { Component, OnInit } from '@angular/core';
import { RecipeYummlyService } from 'src/app/services/recipe-yummly.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null
  };

  public error = null;

  constructor(private recipe: RecipeYummlyService, private router: Router) { }

  onSubmit() {
    this.recipe.login(this.form)
    .subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  
  handleResponse(data) {
    this.recipe.handle(data.access_token, data.user.email, data.user.id);
    this.recipe.changeAuthStatus(true);
    this.router.navigateByUrl('profile');
  }

  handleError(error) {
    this.error = error.error.error;
  }

  ngOnInit() {
  }

}
