import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Flashcard} from "../models/flashcard";

@Injectable({
  providedIn: 'root'
})
export class FlashcardService {
  private flashcardsUrl = 'http://localhost:3001/api/flashcards';
  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Flashcard[]>(this.flashcardsUrl);
  }

  getById(id: string) {
    return this.http.get<Flashcard>(`${this.flashcardsUrl}/${id}`);
  }

  add(flashcard: Flashcard) {
    return this.http.post(this.flashcardsUrl, flashcard);
  }
}
