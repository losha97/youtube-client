import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appBorderBottomColor]',
})
export class BorderBottomColorDirective implements OnInit {

  @Input()
  color!: string;

  constructor(private elRef: ElementRef) {
  }

  ngOnInit() {
    this.elRef.nativeElement.style.borderBottomColor = this.color;
  }

}
