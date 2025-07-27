import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Review } from '../_Models/review';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) {
  }
  private baseUrl = 'https://websitesanayiiwebapi-gtbrejeacxbhcndw.uaenorth-01.azurewebsites.net/api/Review/add-review';


  addRating(review: Review) {
    return this.http.post(`${this.baseUrl}`, review);
  }
}
