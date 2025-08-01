import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceRequestViewModel } from '../_Models/serive-request-view-model';
import {ServiceRequestDetailsDto} from '../_dtos/serive-request-details-dto';

@Injectable({
  providedIn: 'root'
})
export class SeriveRequesPaymentService {

  private apiUrl = 'https://websitesanayiiwebapi-gtbrejeacxbhcndw.uaenorth-01.azurewebsites.net/api/ServiceRequest';

  constructor(private http:HttpClient) {

  }
  getRequsetdetails( SerReq:ServiceRequestViewModel ) {
    return this.http.post<ServiceRequestDetailsDto>(this.apiUrl, SerReq);
  }
}
