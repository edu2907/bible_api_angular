import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreateUser } from './users/shared/createuser';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiBaseUrl = 'https://www.abibliadigital.com.br/api/'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  // Example POST request
  postCreateUser(data: CreateUser) {
    return this.http.post(`${this.apiBaseUrl}users`, data);
  }

  putLoginUser(data: any) {
    return this.http.put(`${this.apiBaseUrl}users/token`, data)
  }
}
