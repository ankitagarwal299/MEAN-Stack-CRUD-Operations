import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';


// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

import { Employee } from './employee.model';

@Injectable()
export class EmployeeService {

  selectedEmployee: Employee;
  employees: Employee[];

  constructor(private http: HttpClient) {
    
  }

  postEmployee(emp: Employee) {
    return this.http.post('http://localhost:3000/employees', emp);
  }

  getEmployeeList() {
    return this.http.get('http://localhost:3000/employees');
  }

  putEmployee(emp: Employee) {
    return this.http.put('http://localhost:3000/employees' + `/${emp._id}`, emp);
  }

  deleteEmployee(_id: string) {
    return this.http.delete('http://localhost:3000/employees' + `/${_id}`);
  }

}
