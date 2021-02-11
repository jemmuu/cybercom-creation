import { Directive , ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appTestInputdirective]'
})
export class TestInputdirectiveDirective {

  constructor(private el : ElementRef) { }

  @HostListener('blur') onfocusout()
  {
      let val = this.el.nativeElement.value;
      console.log(val + ' onblure');
     this.el.nativeElement.value=val.toUpperCase();
  }

}
