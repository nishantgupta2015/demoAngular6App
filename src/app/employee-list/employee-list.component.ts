import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  /*public employees = [
    {"id" : 1, "name" : "brandon", "age" : "30"},
    {"id" : 2, "name" : "Elena", "age" : "32"},
  ];*/

  public employees = [];
  
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
    .subscribe(data => this.employees = data);
    //data-> arugment of the function => this.employees = data ->body of the function
  }

}
