import { Component, Input, OnInit } from '@angular/core';
import { Questions } from 'src/app/model/question';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  @Input() questions: any;
  currentQuestionIndex: number = 0;
  selectedItem: boolean = false;
  disabledPrevButton: boolean = false;
  disabledNextButton: boolean = false;

  // selectedItem:boolean = false;

  constructor() { }

  ngOnInit(): void {
    console.log(this.questions);
    if (this.currentQuestionIndex <= 0) {
      this.disabledPrevButton = true;
    }

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
  }
  prev() {
    this.currentQuestionIndex--;
    this.disabledNextButton = false;
    if ((this.currentQuestionIndex) <= 0) {
      this.disabledPrevButton = true;
    }

  }

  onItemChange(index) {
    this.questions[this.currentQuestionIndex].choices[index].selected = true;
  }


}
