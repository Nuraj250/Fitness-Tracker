import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  workouts = [];
  meals = [];

  constructor(private workoutService: WorkoutService, private mealService: MealService) {
    this.loadData();
  }

  loadData() {
    this.workoutService.getWorkouts().subscribe(data => (this.workouts = data));
    this.mealService.getMeals().subscribe(data => (this.meals = data));
  }
}