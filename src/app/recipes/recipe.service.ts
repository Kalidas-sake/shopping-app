
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping.list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {


  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Paneer Tikka",
      "Paneer Tikka is a popular and delicious tandoori snack where paneer (Indian cottage cheese cubes) are marinated in a spiced yogurt-based marinade, arranged on skewers and grilled in the oven.",
      "https://i2.wp.com/www.vegrecipesofindia.com/wp-content/uploads/2011/10/grilled-paneer-tikka.jpg",
      [
        new Ingredient("Paneer", 1),
        new Ingredient("Curd", 2),
        new Ingredient("capsicum", 1)
      ]),

    new Recipe(
      "Margherita Pizza",
      "Flavorful Margherita Pizza only includes a few simple and tasty ingredients, like perfectly melty mozzarella cheese and fresh basil.",
      "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_730,h_913/k%2Farchive%2Fb36036a54e1cf9c084f4b702a63e5a08f1e98983",
      [
        new Ingredient("Cheese", 3),
        new Ingredient("tomato sauce", 2),
        new Ingredient("Instant yeast", 1)
      ])
  ]


  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }


  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addedIngredients(ingredients);
  }
}