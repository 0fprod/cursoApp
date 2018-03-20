import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appNgcustom]'
})
export class NgcustomDirective {

  @HostBinding('class.Myclass') private mostrar: boolean = false;

  @HostListener('mouseover') onOver(){
    this.mostrar = true;
  }

  @HostListener('mouseout') onOut(){
    this.mostrar = false;
  }

}
