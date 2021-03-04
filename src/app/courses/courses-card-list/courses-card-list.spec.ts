import { DebugElement } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { setupCourses } from "../common/setup-test-data";
import { CoursesModule } from "../courses.module";
import { CoursesCardListComponent } from "./courses-card-list.component";


describe('CourseCardListComponoent', () => {
  let component: CoursesCardListComponent;
  let fixture: ComponentFixture<CoursesCardListComponent>;
  let el: DebugElement;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [CoursesModule]
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(CoursesCardListComponent);
      component = fixture.componentInstance;
      el = fixture.debugElement;
    });
  })

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the course list', () => {
    component.courses = setupCourses();

    console.log(el.nativeElement.outerHTML)

    const cards = el.queryAll(By.css(".course-card"))
  });

  it('should display the first course', () => {
    pending();
  });
})