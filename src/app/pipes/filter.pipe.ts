import { Pipe, PipeTransform } from '@angular/core';
import {Flashcard} from "../models/flashcard";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(flashcards: Flashcard[], filterText: string): Flashcard[] {
    console.log(filterText);
    if (!flashcards) return [];
    if (!filterText) return flashcards;
    filterText = filterText.toLowerCase();
    return flashcards.filter(f => f.frontText.toLowerCase().includes(filterText));
  }

}
