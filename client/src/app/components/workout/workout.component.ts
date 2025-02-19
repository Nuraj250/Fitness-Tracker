import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../../services/workout.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {
  workouts: any[] = [];
  newWorkout = { type: '', duration: 0, caloriesBurned: 0 };

  constructor(private workoutService: WorkoutService) {}

  ngOnInit() {
    this.loadWorkouts();
  }

  loadWorkouts() {
    this.workoutService.getWorkouts().subscribe(data => {
      this.workouts = data;
    });
  }

  addWorkout() {
    this.workoutService.addWorkout(this.newWorkout).subscribe(() => {
      this.loadWorkouts();
      this.newWorkout = { type: '', duration: 0, caloriesBurned: 0 };
    });
  }

  deleteWorkout(id: string) {
    this.workoutService.deleteWorkout(id).subscribe(() => {
      this.loadWorkouts();
    });
  }
}
