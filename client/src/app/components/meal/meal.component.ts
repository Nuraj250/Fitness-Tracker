import { Component, OnInit } from '@angular/core';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-meals',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {
  meals: any[] = [];
  newMeal: any = { foodItems: '', calories: 0, protein: 0, carbs: 0 };

  constructor(private mealService: MealService) {}

  ngOnInit() {
    this.loadMeals();
  }

  loadMeals() {
    this.mealService.getMeals().subscribe(data => {
      this.meals = data;
    });
  }

  addMeal() {
    this.newMeal.foodItems = this.newMeal.foodItems.split(',');
    this.mealService.addMeal(this.newMeal).subscribe(() => {
      this.loadMeals();
      this.newMeal = { foodItems: '', calories: 0, protein: 0, carbs: 0 };
    });
  }

  deleteMeal(id: string) {
    this.mealService.deleteMeal(id).subscribe(() => {
      this.loadMeals();
    });
  }
}
