import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { LoginComponent } from "./components/login/login.component";
import { MealComponent } from "./components/meal/meal.component";
import { RegisterComponent } from "./components/register/register.component";
import { WorkoutComponent } from "./components/workout/workout.component";
import { AuthGuard } from "./guards/auth.guard";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'workouts', component: WorkoutComponent, canActivate: [AuthGuard] },
  { path: 'meals', component: MealComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
