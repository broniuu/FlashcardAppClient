import {Component, Input, OnInit} from '@angular/core';
import {Flashcard} from "../../models/flashcard";
import {FlashcardService} from "../../services/flashcard.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  @Input() filterText: string = '';
  public flashcards$: Flashcard[] = [];

  constructor(private service: FlashcardService) {
  }

  ngOnInit(): void {
   this.getAll();
  }

  getAll(): void {
    this.service.getAll().subscribe(flashcards => {
      this.flashcards$ = flashcards;
    });
  }

  getName($event: string): void {
    this.filterText = $event;
  }
}
