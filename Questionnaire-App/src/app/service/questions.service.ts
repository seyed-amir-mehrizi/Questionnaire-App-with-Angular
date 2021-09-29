import { Injectable } from '@angular/core';
import { questions } from 'src/mock/questions';
import { Questionnaire, RootObject } from '../model/question';
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }

  getListOfQuestions() : Observable<any>{
    return from(questions);
  }


}
