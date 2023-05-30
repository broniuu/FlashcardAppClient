import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashcardDetailComponent } from './flashcard-detail.component';

describe('FlashcardDetailComponent', () => {
  let component: FlashcardDetailComponent;
  let fixture: ComponentFixture<FlashcardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlashcardDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlashcardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
