import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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
  disabledPrevButton: boolean = true;
  disabledNextButton: boolean = true;
  progressBarPercentage: number = 0;
  textDescription: string = '';
  hasConfirmedButton: boolean = false;
  @ViewChild('cardContainer', { read: ElementRef, static:false }) namebutton: ElementRef;

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  get question() {
    return this.questions[this.currentQuestionIndex]
  }

  next(question: Question, choices: Choice[]) {
    this.currentQuestionIndex++;
    this.disabledPrevButton = false;
    this.disabledNextButton = true;
    this.checkQuestionType(question , choices);
    this.calculateProgressBarPercentage();
    this.setupForAnimation();
    if ((this.currentQuestionIndex+1 ) === this.questions.length) {
      this.disabledNextButton = true;
    }
  }
  prev() {
    this.currentQuestionIndex--;
    this.disabledNextButton = false;
    if ((this.currentQuestionIndex) <= 0) {
      this.disabledPrevButton = true;
    }
    this.calculateProgressBarPercentage();
    this.setupForAnimation();
  }


  checkQuestionType(question:Question , choices: Choice[]){
    if (question.question_type === 'multiple-choice') {
      choices.forEach(choice => {
        if (choice.selected === true) {
          this.disabledNextButton = false;
        }
      })
    } else if (question.question_type === 'text') {
      this.disabledNextButton = false;
    }
  }


  onItemChange(index:number) {
    this.questions[this.currentQuestionIndex].choices[index].selected = true;
    this.disabledNextButton = false;
  }

  changeContextInInput(question: Question, value: string) {
    this.textDescription = value;
    this.setValueForDescription(question, value);
    this.dispalyConfirmedButton();
  }

  setValueForDescription(question: Question, value: string) {
    const foundedObject = this.questions.findIndex((item) => {
      return item.identifier === question.identifier;
    });
    this.questions[foundedObject].description = value;
  }

  confirmQuestionnaire() {
    this.toastr.success("Congrats , You finish the Questionnaire ....");
    setTimeout(() => {
      window.location.reload();
    }, 3000);

  }
  dispalyConfirmedButton() {
    if ((this.currentQuestionIndex + 1) === this.questions.length) {
      this.hasConfirmedButton = true;
    }
  }
  calculateProgressBarPercentage(): void {
    this.progressBarPercentage = ((this.currentQuestionIndex + 1) * 100 / this.questions?.length);
  }

  setupForAnimation(){
    this.namebutton.nativeElement.classList.add('slide_next')
    setTimeout(() => {
      this.namebutton.nativeElement.classList.remove('slide_next')
    }, 1000);
  }
}
