import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "/assets/data/employees.json";
   
  constructor(private http: HttpClient) { }
  
  /*getEmployees(){
    return [
      {"id" : 1, "name" : "brandon", "age" : "30"},
      {"id" : 2, "name" : "Elena", "age" : "32"},
      {"id" : 3, "name" : "brandon", "age" : "34"},
      {"id" : 4, "name" : "Elena", "age" : "36"}
    ];
  }*/

  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }
  
}
