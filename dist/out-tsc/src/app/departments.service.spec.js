import { TestBed, inject } from '@angular/core/testing';
import { DepartmentsService } from './departments.service';
describe('DepartmentsService', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [DepartmentsService]
        });
    });
    it('should be created', inject([DepartmentsService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=departments.service.spec.js.map