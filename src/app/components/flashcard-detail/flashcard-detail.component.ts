import {Component, Input, OnInit} from '@angular/core';
import {Flashcard} from "../../models/flashcard";
import {FlashcardService} from "../../services/flashcard.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-flashcard-detail',
  templateUrl: './flashcard-detail.component.html',
  styleUrls: ['./flashcard-detail.component.css']
})
export class FlashcardDetailComponent implements OnInit{
  public flashcard: Flashcard = {
    description: '',
    frontText: '',
    backText: '',
    image: '',
    id: '',
  };

  public rotate = false;

  constructor(private service: FlashcardService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id: string = '';
    this.route.paramMap
      .subscribe((params: any) => {
        id = params.get('id');
      });

    this.service.getById(id).subscribe((flashcard) => {
      this.flashcard = flashcard;
      console.log(flashcard);
    });
  }

  flipCard() {
    this.rotate = !this.rotate;
  }
}
