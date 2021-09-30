import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Question, Choice } from 'src/app/model/question';


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
  disabledNextButton: boolean = true;
  progressBarPercentage: number = 0;
  textDescription: string = '';
  hasConfirmedButton: boolean = false;

  // selectedItem:boolean = false;

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    if (this.currentQuestionIndex <= 0) {
      this.disabledPrevButton = true;
    }
    this.progressBarPercentage = ((this.currentQuestionIndex + 1) * 100 / this.questions.length);

  }

  get question() {
    return this.questions[this.currentQuestionIndex]
  }

  next(question: Question, choices: Choice[]) {
    this.currentQuestionIndex++;
    this.disabledPrevButton = false;
    this.disabledNextButton = true;
    this.progressBarPercentage = ((this.currentQuestionIndex + 1) * 100 / this.questions.length);
    if (question.question_type === 'multiple-choice') {
      choices.forEach(choice => {
        if (choice.selected === true) {
          this.disabledNextButton = false;
        }
      })
    } else if (question.question_type === 'text') {
      this.disabledNextButton = false;
    }
    if ((this.currentQuestionIndex + 1) === this.questions.length) {
      this.disabledNextButton = true;
    }
    this.hasConfirmedButton = false;
  }
  prev() {
    this.currentQuestionIndex--;
    this.disabledNextButton = false;
    if ((this.currentQuestionIndex) <= 0) {
      this.disabledPrevButton = true;
    }
    this.progressBarPercentage = ((this.currentQuestionIndex + 1) * 100 / this.questions.length);
    this.hasConfirmedButton = false;


  }

  onItemChange(index) {
    this.questions[this.currentQuestionIndex].choices[index].selected = true;
    this.disabledNextButton = false;

  }

  changeContextInInput(question, value) {
    this.textDescription = value;
    const foundedObject = this.questions.findIndex((item) => {
      return item.identifier === question.identifier;
    });
    this.questions[foundedObject].description = value;
    this.dispalyConfirmedButton();
  }

  confirmQuestionnaire() {
    this.toastr.success("Congrate , You finish the Questionnaire ....");
    setTimeout(() => {
      window.location.reload();
    }, 3000);

  }

  dispalyConfirmedButton() {
    if ((this.currentQuestionIndex + 1) === this.questions.length) {
      this.hasConfirmedButton = true;
    }
  }
}
