import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Chicken Fry", "Place the chicken pieces on an absorbent paper to drain out the excess oil.", "https://www.ndtv.com/cooks/images/KERELA.FISH.66%281%29.jpg"),
    new Recipe("Fish Fry", "Place the fish pieces on an absorbent paper to drain out the excess oil.", "https://www.ndtv.com/cooks/images/KERELA.FISH.66%281%29.jpg")

  ]

  @Output() recipeSelected = new EventEmitter<Recipe>()

  constructor() { }


  onRecipeSelect(selectedRecipe: Recipe) {
    this.recipeSelected.emit(selectedRecipe);
  }

  ngOnInit(): void {
  }

}
