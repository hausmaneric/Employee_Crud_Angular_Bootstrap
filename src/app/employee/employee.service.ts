import { Observable } from 'rxjs';
import { Employee } from './../models/employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private listEmployee: Employee[] = [
    {
      id: 1,
      name: 'Eric',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'eric.hausman.m@gmail.com',
      dateOfBirth: new Date('June 30, 2001 23:15:30 UTC'),
      department: '3',
      isActive: true,
      photoPath: 'https://avatars.githubusercontent.com/u/109166965?v=4'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      contactPreference: 'Phone',
      phoneNumber: 24988739500,
      dateOfBirth: new Date('June 30, 2001 23:15:30 UTC'),
      department: '2',
      isActive: true,
      photoPath: 'https://pixlr.com/images/index/remove-bg.webp'
    }
  ];
  constructor(private http: HttpClient) { }

  getListEmployees(){
    return this.listEmployee;
  }

  getListEmployee(id:number): Employee | undefined{
    return this.listEmployee.find(e => e.id === id);
  }

  save(employee: Employee): void{
    if(employee.id === null){
      this.listEmployee.push(employee);
    }else{
      const foundIndex = this.listEmployee.findIndex(e => e.id === employee.id);
      this.listEmployee[foundIndex] = employee
    }
  }

  deleteEmployee(id: number | null){
    const i = this.listEmployee.findIndex( e => e.id === id);
    if(i !== -1){
        this.listEmployee.splice(i, 1)
    }
  }
}
