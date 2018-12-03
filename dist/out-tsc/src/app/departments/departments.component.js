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
import { DepartmentsService } from '../departments.service';
var DepartmentsComponent = /** @class */ (function () {
    function DepartmentsComponent(departmentService) {
        this.departmentService = departmentService;
        this.dept_name = null;
    }
    DepartmentsComponent.prototype.ngOnInit = function () {
        this.getDepartments();
    };
    DepartmentsComponent.prototype.insert = function () {
        var count = this.depts.length + 1;
        var dept = {
            id: count,
            dept_name: this.dept_name
        };
        // this.depts.push(dept);
        this.departmentService.addDepartment(dept);
    };
    DepartmentsComponent.prototype.show = function (dept, i) {
        this.selectedDept = dept;
        this.i = i;
    };
    DepartmentsComponent.prototype.update = function (index) {
        // this.depts[index].dept_name = this.selectedDept.dept_name;
        this.departmentService.updateDepartment(this.selectedDept, index);
        this.selectedDept = null;
    };
    DepartmentsComponent.prototype.delete = function (index) {
        if (index !== -1) {
            this.departmentService.deleteDepartment(index);
        }
    };
    DepartmentsComponent.prototype.getDepartments = function () {
        var _this = this;
        this.departmentService.getDepartments().subscribe(function (depts) { return _this.depts = depts; });
    };
    DepartmentsComponent = __decorate([
        Component({
            selector: 'app-departments',
            templateUrl: './departments.component.html',
            styleUrls: ['./departments.component.css']
        }),
        __metadata("design:paramtypes", [DepartmentsService])
    ], DepartmentsComponent);
    return DepartmentsComponent;
}());
export { DepartmentsComponent };
//# sourceMappingURL=departments.component.js.map