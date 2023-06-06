import {Component, OnInit} from '@angular/core';
import {Flashcard} from "../../models/flashcard";
import {ActivatedRoute, Router} from "@angular/router";
import {FlashcardService} from "../../services/flashcard.service";

@Component({
  selector: 'app-update-flashcard',
  templateUrl: './update-flashcard.component.html',
  styleUrls: ['./update-flashcard.component.css']
})
export class UpdateFlashcardComponent implements OnInit{
  public flashcard: Flashcard = {
    description: '',
    backText: '',
    frontText: '',
    id: '',
    image: ''
  }

  constructor(
    private route: ActivatedRoute,
    private service: FlashcardService,
    private router: Router) {
  }

  ngOnInit() {
    let id: string = '';
    this.route.paramMap
      .subscribe((params: any) => {
        id = params.get('id');
      });

    this.service.getById(id).subscribe((flashcard) => {
      this.flashcard = flashcard;
    });
  }

  updateFlashcard() {
    this.service.update(this.flashcard).subscribe(result => {
      this.router.navigate(['/flashcards']);
    })
  }
}
