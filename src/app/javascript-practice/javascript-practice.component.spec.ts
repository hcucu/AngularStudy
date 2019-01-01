import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptPracticeComponent } from './javascript-practice.component';

describe('JavascriptPracticeComponent', () => {
  let component: JavascriptPracticeComponent;
  let fixture: ComponentFixture<JavascriptPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavascriptPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
