import { Component, OnInit } from '@angular/core';
import { Question, RootObject } from './model/question';
import { QuestionsService } from './service/questions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  allQuestionsInfo:RootObject[]; 
  listOfQuestions:Question[];
  questionnaireDescription:string = '';
  questionnaireName:string = '';

  constructor(private questionService : QuestionsService){
  }
  ngOnInit(): void {
    this.getListOfAllQuestions();
  }

  getListOfAllQuestions(){
    this.questionService.getListOfQuestions()
    .subscribe((result:any)=>{
     this.allQuestionsInfo = result;
     this.listOfQuestions = result.questionnaire.questions;
     this.questionnaireDescription =   result.questionnaire.description;
     this.questionnaireName =   result.questionnaire.name;  
    });
  }

}
