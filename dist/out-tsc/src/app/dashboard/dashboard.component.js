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
import { TasksService } from '../tasks.service';
import { DepartmentsService } from '../departments.service';
import { EmployeeService } from '../employee.service';
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(taskService, empService, depService) {
        this.taskService = taskService;
        this.empService = empService;
        this.depService = depService;
    }
    DashboardComponent.prototype.getTasks = function () {
        var _this = this;
        this.taskService.getTasks().subscribe(function (tugas) { return _this.tugas = tugas; });
    };
    DashboardComponent.prototype.getEmployees = function () {
        var _this = this;
        this.empService.getEmployees().subscribe(function (employeeList) { return _this.employeeList = employeeList; });
    };
    DashboardComponent.prototype.getDepartments = function () {
        var _this = this;
        this.depService.getDepartments().subscribe(function (departmentList) { return _this.departments = departmentList; });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.getTasks();
        this.getEmployees();
        this.getDepartments();
    };
    DashboardComponent = __decorate([
        Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
        }),
        __metadata("design:paramtypes", [TasksService, EmployeeService, DepartmentsService])
    ], DashboardComponent);
    return DashboardComponent;
}());
export { DashboardComponent };
//# sourceMappingURL=dashboard.component.js.map