import { Component, OnInit } from '@angular/core';
import { Questionnaire } from './model/question';
import { QuestionsService } from './service/questions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  allQuestionsInfo:any[]; 
  listOfQuestions:any=[];
  questionnaireDescription:string = '';
  questionnaireName:string = '';

  constructor(private questionService : QuestionsService){

  }
  ngOnInit(): void {
    this.allQuestionsInfo = this.questionService.getListOfQuestions();
    this.listOfQuestions = this.questionService.getListOfQuestions()[0].questionnaire.questions;
    this.questionnaireDescription =  this.allQuestionsInfo[0].questionnaire.description;
    this.questionnaireName =  this.allQuestionsInfo[0].questionnaire.name;
    console.log("this.allQuestionsInfo : " , this.allQuestionsInfo);
    
  }

}
