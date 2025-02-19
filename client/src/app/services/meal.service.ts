import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MealService {
  private apiUrl = `${environment.apiUrl}/meals`;

  constructor(private http: HttpClient) {}

  getMeals(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addMeal(meal: any): Observable<any> {
    return this.http.post(this.apiUrl, meal);
  }

  updateMeal(id: string, meal: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, meal);
  }

  deleteMeal(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
