import { Observable } from 'rxjs';
import { Router, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { EmployeeService } from './../employee.service';
import { Employee } from './../../models/employee';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent {
  employees!: Employee[];
  employeeToDisplay!: Employee;
  dataFromChild!: Employee;
  searchTerm!: string;
  private arrayIndex = 1;
  constructor(private employeeService: EmployeeService,private router: Router, private route: ActivatedRoute){}

  ngOnInit(){
    this.employees = this.employeeService.getListEmployees();
    this.employeeToDisplay = this.employees[0];
  }

  nextEmployee(){
    if(this.arrayIndex < 2){
      this.employeeToDisplay = this.employees[this.arrayIndex];
      this.arrayIndex++;
    }else{
      this.employeeToDisplay = this.employees[0];
      this.arrayIndex = 1;
    }
  }

  handleNotify(eventData: Employee){
    this.dataFromChild = eventData;
  }

  onClick(id: number | null){
    this.router.navigate([`/details`, id],{
      queryParams: { 'searchTerm': this.searchTerm, 'testParm': 'testValue' }
    })
  }

}
