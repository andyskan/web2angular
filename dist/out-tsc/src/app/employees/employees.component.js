var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(employeeService) {
        this.employeeService = employeeService;
        this.emp_name = null;
        this.emp_address = null;
    }
    EmployeesComponent.prototype.getEmployees = function () {
        var _this = this;
        this.employeeService.getEmployees().subscribe(function (employeesGroup) { return _this.employeesGroup = employeesGroup; });
    };
    EmployeesComponent.prototype.ngOnInit = function () {
        this.getEmployees();
    };
    EmployeesComponent.prototype.insert = function () {
        var count = this.employeesGroup.length + 1;
        var emp = {
            id: count,
            emp_name: this.emp_name,
            emp_address: this.emp_address
        };
        // this.employeesGroup.push(emp);
        this.employeeService.createEmployee(emp);
    };
    EmployeesComponent.prototype.show = function (emp, i) {
        this.selectedEmp = emp;
        this.i = i;
    };
    EmployeesComponent.prototype.update = function (index) {
        this.employeeService.updateEmployee(index, this.selectedEmp.emp_name, this.selectedEmp.emp_address);
        this.selectedEmp = null;
    };
    EmployeesComponent.prototype.delete = function (index) {
        this.employeeService.deleteEmployee(index);
    };
    EmployeesComponent = __decorate([
        Component({
            selector: 'app-employees',
            templateUrl: './employees.component.html',
            styleUrls: ['./employees.component.css']
        }),
        __metadata("design:paramtypes", [EmployeeService])
    ], EmployeesComponent);
    return EmployeesComponent;
}());
export { EmployeesComponent };
//# sourceMappingURL=employees.component.js.map