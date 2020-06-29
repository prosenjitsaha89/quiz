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

  delEmployee(id: number): Observable<any> {
    console.log('delEmployee()');
    return this.http.delete(`${this.getEmpListUrl}/${id}`);
  }
}
