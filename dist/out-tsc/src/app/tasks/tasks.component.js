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
var TasksComponent = /** @class */ (function () {
    function TasksComponent(taskService, empService, depService) {
        this.taskService = taskService;
        this.empService = empService;
        this.depService = depService;
        this.priorityList = this.taskService.getPriorities();
    }
    TasksComponent.prototype.getTasks = function () {
        var _this = this;
        this.taskService.getTasks().subscribe(function (tugas) { return _this.tugas = tugas; });
    };
    TasksComponent.prototype.getEmployees = function () {
        var _this = this;
        this.empService.getEmployees().subscribe(function (employeeList) { return _this.employeeList = employeeList; });
    };
    TasksComponent.prototype.getDepartments = function () {
        var _this = this;
        this.depService.getDepartments().subscribe(function (departmentList) { return _this.departments = departmentList; });
    };
    TasksComponent.prototype.ngOnInit = function () {
        this.getTasks();
        this.getEmployees();
        this.getDepartments();
    };
    TasksComponent.prototype.onSelect = function (oldTask) {
        this.selectedTask = oldTask;
    };
    TasksComponent.prototype.addTask = function () {
        var newId = this.tugas.length + 1;
        var newTask = {
            id: newId,
            name: this.newTaskName,
            priority: this.newPriority,
            depId: this.newDepartment,
            empId: this.newEmployee,
            dueDate: null
        };
        // this.tugas.push(newTask);
        this.taskService.createNewTask(newTask);
    };
    TasksComponent.prototype.getDepartmentName = function (depId) {
        if (depId !== null) {
            return this.departments[depId - 1].dept_name;
        }
        else {
            return 'No Department assigned';
        } // return tempEmp.eame;
    };
    TasksComponent.prototype.getEmployeeName = function (empId) {
        if (empId !== null) {
            return this.employeeList[empId - 1].emp_name;
        }
        else {
            return 'no employees assigned'; // return tempEmp.eame;
        }
    };
    TasksComponent.prototype.deleteTask = function (index) {
        this.taskService.deleteTask(index);
    };
    TasksComponent.prototype.updateTask = function (index, newName, newPriority) {
        this.taskService.updateTask(index, newName, newPriority);
    };
    TasksComponent = __decorate([
        Component({
            selector: 'app-tasks',
            templateUrl: './tasks.component.html',
            styleUrls: ['./tasks.component.css']
        }),
        __metadata("design:paramtypes", [TasksService, EmployeeService, DepartmentsService])
    ], TasksComponent);
    return TasksComponent;
}());
export { TasksComponent };
//# sourceMappingURL=tasks.component.js.map