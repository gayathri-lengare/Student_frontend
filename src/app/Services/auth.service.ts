import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://localhost:7122/api/Auth';

  constructor(private http: HttpClient) { }

  login(data: any) {

    return this.http.post(
      `${this.apiUrl}/login`,
      data
    );
  }
}