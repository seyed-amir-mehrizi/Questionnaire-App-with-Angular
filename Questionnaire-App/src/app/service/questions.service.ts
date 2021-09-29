import { Injectable } from '@angular/core';
import { questions } from 'src/mock/questions';
import { Questionnaire, RootObject } from '../model/question';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }

  getListOfQuestions(){
    return from(questions);
  }


}
