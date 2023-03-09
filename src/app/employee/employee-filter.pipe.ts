import { Employee } from 'src/app/models/employee';
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'employeeFilter',
  pure: false
})
export class EmployeeFilterPipe implements PipeTransform{
  transform(employees: Employee[], searchTerm: string): Employee[] {
      if( !employees || !searchTerm){
        return employees;
      }

      return employees.filter(employee => employee.name?.toLocaleLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }
}
