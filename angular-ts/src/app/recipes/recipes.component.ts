import { Component, OnInit } from '@angular/core';
import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { NgFor } from '@angular/common';

type Recipe = {
  id: string;
  name: string;
  ingredients: string[];
};

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [RecipeCardComponent, NgFor],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent implements OnInit {
  recipes: Recipe[] = [];

  ngOnInit(): void {
    fetch('https://backend-login-placeholder.deno.dev/api/recepies', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'error') {
          throw new Error(data.code);
        }
        return data.payload;
      })
      .then((recipes) => {
        this.recipes = recipes;
      });
  }
}
