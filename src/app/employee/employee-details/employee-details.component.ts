import { Employee } from 'src/app/models/employee';
import { EmployeeService } from './../employee.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  employee!: Employee | undefined;
  employees!: Employee[];
  private id!: number;
  constructor(private route: ActivatedRoute, private router: Router ,private employeeService: EmployeeService){}

  ngOnInit(){
    const id = +this.route.snapshot.params['id'];
    this.employee = this.employeeService.getListEmployee(id);
  }

  nextEmployee(){
    if(this.id < 2){
      this.id = this.id + 1;
    }else{
      this.id = 1;
    }
    this.router.navigate(['/details', this.id]);
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }
}
