import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { CoursesService } from "./courses.service";
import { COURSES } from "../../../../server/db-data";


describe("CoursesService", () => {
    let coursesService: CoursesService;
    let httpTestingController: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ],
            providers: [
                CoursesService
            ]
        })

        coursesService = TestBed.inject(CoursesService);
        httpTestingController = TestBed.inject(HttpTestingController);
    })

    it('should retrieve all courses', () => {

        coursesService.findAllCourses()
            .subscribe(courses => {
                expect(courses).toBeTruthy('No courses returned');
                expect(courses.length).toBe(
                    12,
                    "Incorrect assertion of courses"
                );

                const course = courses.find(course => course.id === 12);

                expect(course.titles.description).toBe(
                    "Angular Testing Course"
                );
            });

        const req = httpTestingController.expectOne('/api/courses');

        expect(req.request.method).toEqual("GET");

        req.flush({payload: Object.values(COURSES)});
    });

    it('should retrieve a specific singular course', () => {
        coursesService.findCourseById(5)
            .subscribe(course => {
                expect(course).toBeTruthy();
                expect(course.id).toBe(5);
            });

        const req = httpTestingController.expectOne('/api/courses/5');
        expect(req.request.method).toEqual("GET");
        req.flush(COURSES[5]);
    });

    afterEach(() => {
        httpTestingController.verify();
    })
});





