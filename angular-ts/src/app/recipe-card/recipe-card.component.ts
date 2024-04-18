import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css',
  imports: [NgFor],
})
export class RecipeCardComponent {
  @Input() name!: string;
  @Input() ingredients!: string[];
}
