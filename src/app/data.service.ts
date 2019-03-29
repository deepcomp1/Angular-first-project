import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  employees: Object;
  constructor(private http: HttpClient) { }
  getEmployees() {
    this.employees = this.http.get('http://localhost:4200/assets/employees.json');
    return this.employees;
  }


}
