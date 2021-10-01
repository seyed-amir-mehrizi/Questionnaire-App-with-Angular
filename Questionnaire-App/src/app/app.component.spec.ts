import { not } from '@angular/compiler/src/output/output_ast';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { QuestionsService } from './service/questions.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,

      ],
      declarations: [
        AppComponent
      ],
      providers: [
        QuestionsService
      ]
    }).compileComponents();
  });
  it('should not return empty data when call the Question service to get data', () => {
    let fixture = TestBed.createComponent(AppComponent);
    let component: AppComponent = fixture.debugElement.componentInstance;
    let appService = fixture.debugElement.injector.get(QuestionsService);
    let stub = spyOn(appService, 'getListOfQuestions').and.callFake(() => {
      return of([])
    });
    component.getListOfAllQuestions();
    expect(component.listOfQuestions).not.toEqual([]);
  });
});
