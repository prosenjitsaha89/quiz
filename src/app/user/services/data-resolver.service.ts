import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataResolverService {

  private getEmpListUrl = 'http://localhost:3000/employees';

  constructor(
    private http: HttpClient) {

  }

  getEmployeeList(): Observable<any> {
    console.log('getEmployeeList()');
    return this.http.get(this.getEmpListUrl);
  }

  getEmployee(id: number): Observable<any> {
    console.log('getEmployee()');
    return this.http.get(`${this.getEmpListUrl}/${id}`);
  }

  delEmployee(id: number): Observable<any> {
    console.log('delEmployee()');
    return this.http.delete(`${this.getEmpListUrl}/${id}`);
  }

  addEmployee(data: any): Observable<any> {
    console.log('addEmployee()');
    return this.http.post(this.getEmpListUrl, data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    console.log('updateEmployee()');
    return this.http.put(`${this.getEmpListUrl}/${id}`, data);
  }
}
