import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appButtonLoading]'
})
export class ButtonLoadingDirective implements OnInit{

  loading: boolean = false
  @Input()textInput: string;

  constructor(
    private elementRef: ElementRef<HTMLButtonElement>,
    private rendered: Renderer2
  ) {

    //elementRef.nativeElement.className = 'btn-outline-primary btn'
    //elementRef.nativeElement.innerHTML = 'Modificado desde la Directiva'
  }

  ngOnInit() {
    this.rendered.addClass(this.elementRef.nativeElement,'btn-outline-primary')
    this.rendered.setProperty(this.elementRef.nativeElement,'innerHTML', this.textInput)
    this.rendered.addClass(this.elementRef.nativeElement,'btn')
  }

  @HostListener('click')
  onClick(){
    console.log('Click Directive')
    if(!this.loading){
      this.rendered.setProperty(
        this.elementRef.nativeElement,
        'innerHTML',
        `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...`
      )
    }else{
      this.rendered.setProperty(
        this.elementRef.nativeElement,
        'innerHTML',
        this.textInput
      )
    }
    this.loading = !this.loading


  }

/*  @HostListener('mouseenter')
  onMouseEnter(){
    this.rendered.removeClass(this.elementRef.nativeElement,'btn-outline-primary')
    this.rendered.addClass(this.elementRef.nativeElement,'btn-outline-success')
    console.log('Mouse Enter from Directive')
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.rendered.removeClass(this.elementRef.nativeElement,'btn-outline-success')
    this.rendered.addClass(this.elementRef.nativeElement,'btn-outline-primary')
    console.log('Mouse Enter from Directive')
  }*/



}
