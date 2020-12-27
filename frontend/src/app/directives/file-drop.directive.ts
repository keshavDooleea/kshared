import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appFileDrop]',
})
export class FileDropDirective {
  @Output() dropFilesEmitter = new EventEmitter<FileList>();

  constructor() {}

  @HostBinding('style.filter') private filter = 'brightness(100%)';

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.filter = 'brightness(120%)';
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.filter = 'brightness(100%)';
  }

  @HostListener('drop', ['$event'])
  onFileDrop(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();

    this.filter = 'brightness(100%)';
    const files = event.dataTransfer.files;
    this.dropFilesEmitter.emit(files);
  }
}
