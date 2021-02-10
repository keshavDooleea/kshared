import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appFileBinding]',
})
export class FileBindingDirective {
  @Output() alertHomeFile = new EventEmitter<boolean>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:keydown.o', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    const inputs = this.elementRef.nativeElement.querySelectorAll(
      'input, textarea'
    );

    let isFocusingInput = Array.from(inputs).some(
      (input) => event.target === input
    );

    if (!isFocusingInput) {
      this.alertHomeFile.emit(true);
    }
  }
}
