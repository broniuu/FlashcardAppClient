import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.transition = 'transform .2s';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.zoomIn();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.zoomOut();
  }

  private zoomIn(){
    this.el.nativeElement.style.scale = 1.25;
  }
  private zoomOut() {
    this.el.nativeElement.style.scale = 1;
  }
}
