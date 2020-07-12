import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataResolverService {
  private toDoListUrl = 'http://localhost:3000/todo';
  constructor(private http:HttpClient) { }

  getToDoDatas():Observable<any>{
    // console.log('getToDoDatas()');
    return this.http.get(this.toDoListUrl);
  }
  addToDoData(data:any):Observable<any>{
    // console.log('addToDoData()');
    return this.http.post(this.toDoListUrl,data);
  }
  deleteToDoData(id:number):Observable<any>{
    // console.log('deleteToDoData()');
    return this.http.delete(`${this.toDoListUrl}/${id}`); 
  }
}