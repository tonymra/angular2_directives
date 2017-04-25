import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer,OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') mouseenter(){

  this.backgroundColor = this.highlightColor;
};

  @HostListener('mouseleave') mouseleave(){

    this.backgroundColor = this.defaultColor;
  };

  @HostBinding('style.backgroundColor') get setColor(){

    return this.backgroundColor;
  }

  @Input() defaultColor = 'red';
  @Input('appHighlight') highlightColor = 'blue';
  private backgroundColor = this.defaultColor;

  //private elementRef: ElementRef;

  //constructor(elementRef: ElementRef) {

 //   this.elementRef = elementRef;
//  }

 // constructor( private elementRef: ElementRef, private render:Renderer) {

    //this.elementRef.nativeElement.style.backgroundColor='green';

  //  this.render.setElementStyle(this.elementRef.nativeElement, 'background-color','black');
 // }


  //Mouse hover

  constructor( ) {

    //this.elementRef.nativeElement.style.backgroundColor='green';

    //this.render.setElementStyle(this.elementRef.nativeElement, 'background-color','black');


  }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }



}

//Shorter way
//constructor( private elementRef: ElementRef) { }

