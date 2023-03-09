import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ListEmployeeComponent } from './employee/list-employee/list-employee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeGuard } from './create-employee.guard'

const routes: Routes = [
  {
    path:'list',
    component: ListEmployeeComponent
  },
  {
    path:'details/:id',
    component: EmployeeDetailsComponent
  },
  {
    path:'create/:id',
    component: CreateEmployeeComponent,
    canDeactivate: [ CreateEmployeeGuard ]
  },
  {
    path:'edit/:id',
    component: CreateEmployeeComponent,
    canDeactivate: [ CreateEmployeeGuard ]
  },
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [CreateEmployeeGuard]
})
export class AppRoutingModule { }
