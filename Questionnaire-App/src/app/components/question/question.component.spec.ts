import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionComponent } from './question.component';

describe('QuestionComponent', () => {
    let component: QuestionComponent;
    beforeAll(() => {
        component = new QuestionComponent(null);
    });
    it('should check if the next button incerment currentQuestionIndex',()=>{
        component.prev();
        expect(component.currentQuestionIndex).toBe(-1);
    })
});
