import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private _el: ElementRef) { }

  @HostListener("mouseenter") onMouseEnter(){
    this.highlight('yellow');
  }

  @HostListener("mouseleave") onMouseLeave(){
    this.highlight('');
  }

  private highlight(color: string){
    this._el.nativeElement.style.backgroundColor = color;
  }

}
