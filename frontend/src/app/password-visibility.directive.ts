import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appPasswordVisibility]'
})
export class PasswordVisibilityDirective {

  private type = 'password';
  private isVisible = false;

  constructor(private el: ElementRef) {
    this.toggleVisibility();
  }

  @HostListener('click') onClick() {
    this.isVisible = !this.isVisible;
    this.toggleVisibility();
  }

  private toggleVisibility() {
    this.type = this.isVisible ? 'text' : 'password';
    this.el.nativeElement.setAttribute('type', this.type);
  }

}
