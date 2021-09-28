import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() questions;
  currentQuestionIndex:number = 0
  constructor() { }

  ngOnInit(): void {
    console.log(this.questions);
    
  }

  get question(){
    return this.questions[this.currentQuestionIndex]
  }

  next(){
    this.currentQuestionIndex++;
  }
  prev(){
    this.currentQuestionIndex--;

  }


}
