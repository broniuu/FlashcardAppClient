export interface Flashcard {
  frontText: string;
  backText: string;
  image: string;
  description: string;
  id: string
}

export interface AddFlashcardDto {
  frontText: string;
  backText: string;
  image: string;
  description: string;
}
