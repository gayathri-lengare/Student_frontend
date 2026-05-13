import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  apiUrl = 'https://localhost:7122/api/Student';

  constructor(private http: HttpClient) {}

  // JWT Header
  getHeaders() {
    const token = localStorage.getItem('token');

    return {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`,
      }),
    };
  }

  // GET ALL STUDENTS
  getStudents(): Observable<any> {
    return this.http.get(this.apiUrl, this.getHeaders());
  }

  // ADD STUDENT
  addStudent(student: any): Observable<any> {
    return this.http.post(this.apiUrl, student, this.getHeaders());
  }

  // UPDATE STUDENT
  updateStudent(id: number, student: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, student, this.getHeaders());
  }

  // DELETE STUDENT
  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, this.getHeaders());
  }
}
