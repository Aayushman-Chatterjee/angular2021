import { Directive, Renderer2, ElementRef, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {
  @Input() defaultColor: string ='transparent';
  @Input('appBetterHighlight') highlightColor: string ='blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer:Renderer2) { }

  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventdata: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','blue');
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventdata: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent');
    this.backgroundColor = this.defaultColor;
  }
}
