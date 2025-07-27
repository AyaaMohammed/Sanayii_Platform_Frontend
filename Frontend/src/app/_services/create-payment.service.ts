import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreatePaymentService {
  private baseUrl = 'https://websitesanayiiwebapi-gtbrejeacxbhcndw.uaenorth-01.azurewebsites.net/api/payments';


constructor(private http:HttpClient) {

}

  createCheckoutSession(data: any) {
    return this.http.post<any>(`${this.baseUrl}/create-session`, data);
  }
  getprice(id: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/getprice/${id}`);
  }
}
