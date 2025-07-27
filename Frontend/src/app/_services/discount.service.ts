import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Discount } from '../_Models/discount';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  private baseUrl = 'https://websitesanayiiwebapi-gtbrejeacxbhcndw.uaenorth-01.azurewebsites.net/api/Discounts/';
  constructor(public http:HttpClient) {}

  getDiscount(id: string){
    return this.http.get<Discount[]>(this.baseUrl  + id);
  }
}
