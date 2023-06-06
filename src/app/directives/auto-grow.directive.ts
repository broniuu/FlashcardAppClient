import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appAutoGrow]'
})
export class AutoGrowDirective {

  constructor(private element: ElementRef) {
  }

  @HostListener('input', ['$event.target']) onInput(textArea: HTMLTextAreaElement) {
    this.adjustTextAreaHeight(textArea);
  }

  private adjustTextAreaHeight(textArea: HTMLTextAreaElement): void {
    textArea.style.overflow = 'hidden';
    textArea.style.height = 'auto';
    textArea.style.height = textArea.scrollHeight + 'px';
  }

}
