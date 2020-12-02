import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl',
})
export class SafeUrlPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) {}

  transform(value: any, prefix = ''): SafeUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(prefix + value);
  }
}
