import { Ingredient } from "../shared/ingredient.model";

export class Recipe {

  public name: string;
  public description: string;
  public imgUrl: string;
  public ingredients: Ingredient[];

  constructor(name: string, description: string, imgUrl: string, ingredients: Ingredient[]) {
    this.name = name;
    this.description = description;
    this.imgUrl = imgUrl;
    this.ingredients = ingredients;
  }
}