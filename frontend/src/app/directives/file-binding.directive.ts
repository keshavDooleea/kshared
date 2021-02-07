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
    const input = this.elementRef.nativeElement.querySelector(
      '.filter-container input'
    );
    const textarea = this.elementRef.nativeElement.querySelector(
      '.text-container textarea'
    );
    const openTextarea = this.elementRef.nativeElement.querySelector(
      '.open-note-textarea'
    );

    if (
      event.target === textarea ||
      event.target === input ||
      event.target === openTextarea
    ) {
      return;
    }

    this.alertHomeFile.emit(true);
  }
}
