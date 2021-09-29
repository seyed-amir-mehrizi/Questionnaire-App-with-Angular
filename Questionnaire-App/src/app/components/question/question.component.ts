import { Component, Input, OnInit } from '@angular/core';
import { Question } from 'src/app/model/question';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() questions: Question[];
  currentQuestionIndex: number = 0;
  selectedItem: boolean = false;
  disabledPrevButton: boolean = false;
  disabledNextButton: boolean = false;
  progressBarPercentage:number = 0;
  Math:Math;

  // selectedItem:boolean = false;

  constructor() { }

  ngOnInit(): void {
    if (this.currentQuestionIndex <= 0) {
      this.disabledPrevButton = true;
    }
    this.progressBarPercentage = ((this.currentQuestionIndex+1)*100 / this.questions.length);

  }

  get question() {
    return this.questions[this.currentQuestionIndex]
  }

  next() {
    this.currentQuestionIndex++;
    if ((this.currentQuestionIndex + 1) === this.questions.length) {
      this.disabledNextButton = true;
    }
    this.disabledPrevButton = false;
    this.progressBarPercentage = ((this.currentQuestionIndex+1)*100 / this.questions.length);
  }
  prev() {
    this.currentQuestionIndex--;
    this.disabledNextButton = false;
    if ((this.currentQuestionIndex) <= 0) {
      this.disabledPrevButton = true;
    }
    this.progressBarPercentage = ((this.currentQuestionIndex+1)*100 / this.questions.length);

  }

  onItemChange(index) {
    this.questions[this.currentQuestionIndex].choices[index].selected = true;
  }


}
