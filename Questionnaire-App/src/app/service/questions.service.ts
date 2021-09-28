import { Injectable } from '@angular/core';
import { questions } from 'src/mock/questions';
import { Questionnaire } from '../model/question';
@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  constructor() { }

  getListOfQuestions(){
    return questions;
  }


}
