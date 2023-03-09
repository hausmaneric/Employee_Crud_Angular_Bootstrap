import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent {
  private _employeeId!: number | null;
  searchTerm!: string;
  @Input()
  set employeeId(val: number| null){
    this._employeeId = val;
  }
  private _employee!: Employee;
  @Input()
  set employees(val:Employee){
    this._employee = val;
  }
  get employees(): Employee{
    return this._employee;
  }

  isHidden = true;

  @Output() notify: EventEmitter<Employee> = new EventEmitter<Employee>();
  @Output() notifyDelete: EventEmitter<number| null> = new EventEmitter<number | null>();
  constructor(private employeeService: EmployeeService,private router: Router,){}

  ngOnInit(){
    // this.employees = this.employeeService.getListEmployee();
  }

  viewEmployee(id: number | null){
    this.router.navigate([`/details`, id],{
      queryParams: { 'searchTerm': this.searchTerm }
    })
  }

  edit(id: number | null){
    this.router.navigate(['/edit', id])
  }

  delete(){
    this.employeeService.deleteEmployee(this.employees.id);
    this.notifyDelete.emit(this.employees.id);
  }

  handleClick(){
    this.notify.emit(this.employees);
  }
}
