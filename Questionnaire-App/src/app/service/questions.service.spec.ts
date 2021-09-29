

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
    // spyOn(service, 'getListOfQuestions').and.callFake(() => {
    //   return Observable.of([[1,2,3]])
    // });
  });
});
