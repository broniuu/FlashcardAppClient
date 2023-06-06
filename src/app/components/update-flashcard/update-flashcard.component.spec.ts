import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFlashcardComponent } from './update-flashcard.component';

describe('UpdateFlashcardComponent', () => {
  let component: UpdateFlashcardComponent;
  let fixture: ComponentFixture<UpdateFlashcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFlashcardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFlashcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
