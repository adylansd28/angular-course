import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a description', 'C:/Users/Usuario/Downloads/Toma-GFCI-1.JPEG'),
    new Recipe('A Test Recipe', 'This is a description', 'https://losviajesdenena.com/wp-content/uploads/2017/10/comida-tipica-de-quito-laura-lazzarino-1.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
