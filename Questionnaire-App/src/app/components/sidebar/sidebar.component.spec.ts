import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
    let component: SidebarComponent;
    let fixture: ComponentFixture<SidebarComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                SidebarComponent
            ]
        });
        fixture = TestBed.createComponent(SidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should render the name of the questionnaire not to be empty', () => {
        component.name='';
        let de = fixture.debugElement.query(By.css('#questionnaire_name'));
        let el:HTMLElement = de.nativeElement;
        expect(el.innerText).not.toContain('');
    });
    it('should render the description of the questionnaire not to be empty', () => {
        component.name='';
        let de = fixture.debugElement.query(By.css('#questionnaire_description'));
        let el:HTMLElement = de.nativeElement;
        expect(el.innerText).not.toContain('');
    });
});
