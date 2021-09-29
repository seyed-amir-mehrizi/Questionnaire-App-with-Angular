
import { from, Observable } from 'rxjs';
import { AppComponent } from '../app.component';
import { QuestionsService } from './questions.service';


describe('QuestionsService', () => {
  let service: QuestionsService;
  let component: AppComponent;

  beforeEach(() => {
    service = new QuestionsService();
    component = new AppComponent(service);
  });

  it('should get All questions form the service ', () => {
    let questionsList = [
      {id : 1 , title:'test 1'},
      {id : 2 , title:'test 2'},
      {id : 3 , title:'test 3'}
    ]
    spyOn(service, 'getListOfQuestions').and.callFake((): any => {
      return from([questionsList]);
    });
    component.ngOnInit();
    expect(component.allQuestionsInfo.length).toBeGreaterThan(0);
  });
  
});
