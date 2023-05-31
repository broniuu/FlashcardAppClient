import { Component } from '@angular/core';
import {FlashcardService} from "../../services/flashcard.service";
import {AddFlashcardDto, Flashcard} from "../../models/flashcard";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-flashcard',
  templateUrl: './add-flashcard.component.html',
  styleUrls: ['./add-flashcard.component.css']
})
export class AddFlashcardComponent {
  public flashcard: AddFlashcardDto = {
    description: '',
    frontText: '',
    backText: '',
    image: '',
  }

  constructor(private flashcardService: FlashcardService, private router: Router) {
  }

  addFlashcard() {
    this.flashcardService.add(this.flashcard).subscribe(result => {
      this.router.navigate(['/']);
    });
  }
}
