import {Component, OnInit} from '@angular/core';
import {Flashcard} from "../../models/flashcard";
import {FlashcardService} from "../../services/flashcard.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
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
}
