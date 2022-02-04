import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appArchonRedirect]'
})
export class ArchonRedirectDirective implements OnInit{

  @Input()textInput: string;

  constructor(
    private elementRef: ElementRef<HTMLAnchorElement>,
    private rendered: Renderer2
  ) { }

  ngOnInit() {
    this.rendered.addClass(this.elementRef.nativeElement,'btn')
    this.rendered.addClass(this.elementRef.nativeElement,'btn-primary')
    this.rendered.setProperty(this.elementRef.nativeElement,'innerHTML', this.textInput)
  }

  @HostListener('click')
  onClick(){
    this.rendered.setProperty(
      this.elementRef.nativeElement,
      'innerHTML',
      `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Redireccionando...`
    )

    //Simulacion de una llamada asíncrona
    setTimeout(()=>{
      this.rendered.setProperty(
        this.elementRef.nativeElement,
        'innerHTML',
        this.textInput
      )
    },3000)

  }

}
