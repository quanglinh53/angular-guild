import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This simply a test', 'https://assets.bonappetit.com/photos/5d7296eec4af4d0008ad1263/3:2/w_1280,c_limit/Basically-Gojuchang-Chicken-Recipe-Wide.jpg'),
    new Recipe('Another Recipe2', 'This simply another test2', 'https://mouthsofmums.com.au/wp-content/uploads/2014/03/01/Crayfish-Mornay-Recipe-Main-Image-750x516.png'),
    new Recipe('A Test Recipe3', 'This simply a test3', 'https://www.mastercook.com/app/Image/20843775/6777576.jpg'),
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe)
  }

}
