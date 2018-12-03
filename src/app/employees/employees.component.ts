import {
  Component,
  OnInit
} from '@angular/core';
import {
  Employees,
  Employee
} from '../employee';
import {
  EmployeeService
} from '../employee.service';
import {
  department
} from '../department';
import {
  DepartmentsService
} from '../departments.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  emp_name = null;
  first_name = null;
  employeesGroup: Employee[];
  searchEmployee: Employee[] = [];
  searchName: string;
  emp_address = null;
  birth_date: Date;
  selectedEmp: Employee;
  i: number;
  depts: department[] = [];
  dept: department;

  constructor(private employeeService: EmployeeService, private departmentService: DepartmentsService) {}
  getEmployees(): void {
    this.employeeService.getEmployees().subscribe(employeesGroup => this.employeesGroup = employeesGroup);
  }

  ngOnInit() {
    this.getEmployees();
    // for (let emp of this.employeesGroup){
    //   this.getDepartment(emp.department_id);
    //   this.depts.push(this.dept);
    //   // console.log(this.depts[0].dept_name);
    // }
  }

  insert(): void {
    const count = this.employeesGroup.length + 1;
    const emp: Employee = {
      id: count,
      last_name: this.emp_name,
      first_name: this.first_name,
      // emp_name: this.emp_name,
      // emp_address: this.emp_address,
      department_id: 1,
      birth_date: this.birth_date
    };
    // this.employeesGroup.push(emp);
    this.employeeService.createEmployee(emp);
  }

  show(emp: Employee, i: number): void {
    this.selectedEmp = emp;
    this.i = i;
  }

  // update(index: number): void {
  //   this.employeeService.updateEmployee(index, this.selectedEmp.first_name, this.selectedEmp.last_name);
  //   this.selectedEmp = null;
  // }

  delete(index: number): void {
    this.employeeService.deleteEmployee(index);
  }

  // getDepartment(i: number): void {
  //   this.departmentService.getDepartmentById(i).subscribe(dept => this.dept = dept);
  // }
  searchEmp() {
    this.searchEmployee = [];
    for (let i = 0; i < this.employeesGroup.length; i++) {
      // nameRegex = new RegExp(this.tugas[i].name , 'gi');
      // console.log(nameRegex);
        // console.log(this.tugas[i].name + this.searchName.search(this.tugas[i].name));
      if (this.searchName.toLowerCase() === this.employeesGroup[i].first_name.toLowerCase()) {
        this.searchEmployee.push(this.employeesGroup[i]);
      }
    }
  }
}
