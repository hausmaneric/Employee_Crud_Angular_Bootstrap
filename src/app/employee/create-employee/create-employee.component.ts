import { EmployeeService } from './../employee.service';
import { Employee } from './../../models/employee';
import { Departament } from './../../models/departament';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BsDatepickerConfig } from "ngx-bootstrap/datepicker"
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  @ViewChild('employeeForm') public createEmployeeForm!: NgForm;
  datePickerConfig!: Partial<BsDatepickerConfig>;
  previewPhoto = false;
  employee!: Employee;
  title!: string;

  departments: Departament[] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'},
    {id: 4, name: 'Payroll'},
    {id: 5, name: 'Admin'},
  ]


  constructor(private employeeService: EmployeeService, private router: Router, private route: ActivatedRoute){
    this.datePickerConfig = Object.assign({}, {containerClass: 'theme-dark-blue', showWeekNumbes: false, dateInputFormat: 'DD/MM/YYYY'});
  }

  ngOnInit(){
    const id = +this.route.snapshot.params['id'];
    this.getEmployee(id);
  }

  private getEmployee(id: number){
    if(id == 0){
      this.employee = {
        id: null,
        name: undefined,
        gender: null,
        email: '',
        phoneNumber: null,
        contactPreference: null,
        dateOfBirth: null,
        department: null,
        isActive: null,
        photoPath: null,
        password: null,
        confirmPassword: null
      };
      this.title = 'Create Employee';
    }else{
      this.employee = Object.assign({}, this.employeeService.getListEmployee(id));
      console.log(this.employeeService.getListEmployee(id))
      this.title = 'Edit Employee';
    }
  }

  saveEmployee(){
    const newEmployee: Employee = Object.assign({}, this.employee)
    this.employeeService.save(newEmployee);
    this.createEmployeeForm.reset();
    setTimeout(() => {
      this.router.navigate(['list'])
    }, 500);
  }

  togglePhotoPreview(){
    this.previewPhoto = !this.previewPhoto;
  }

}
