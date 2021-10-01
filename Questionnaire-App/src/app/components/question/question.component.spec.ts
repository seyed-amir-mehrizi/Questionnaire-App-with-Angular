import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionComponent } from './question.component';

describe('QuestionComponent', () => {
    let component: QuestionComponent;
    beforeAll(() => {
        component = new QuestionComponent(null);
    });
    // it('should check if the prev button decrement currentQuestionIndex',()=>{
    //     const childComponent = jasmine.createSpyObj('cardContainer', ['namebutton']);
    //     component.prev();
    //     component.namebutton = childComponent;
    //     expect(component.currentQuestionIndex).toBe(-1);
    //     expect(component.disabledNextButton).toBe(false);

    // });
});
