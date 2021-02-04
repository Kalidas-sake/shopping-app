export class Recipe {

  public name: string;
  public description: string;
  public imgUrl: string;

  constructor(name: string, description: string, imgUrl: string) {
    this.name = name;
    this.description = description;
    this.imgUrl = imgUrl;
  }
}