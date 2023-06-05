import {Component, Input, OnInit} from '@angular/core';
import {Flashcard} from "../../models/flashcard";
import {FlashcardService} from "../../services/flashcard.service";

@Component({
  selector: 'app-flashcards',
  templateUrl: './flashcards.component.html',
  styleUrls: ['./flashcards.component.css']
})
export class FlashcardsComponent implements OnInit{
  @Input() filterText: string = '';
  public flashcards$: Flashcard[] = [];

  constructor(private flashcardService: FlashcardService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.flashcardService.getAll().subscribe(flashcards => {
      this.flashcards$ = flashcards;
    });
  }

  getName($event: string): void {
    this.filterText = $event;
  }
}
