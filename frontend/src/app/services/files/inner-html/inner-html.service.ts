import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InnerHtmlService {
  constructor() {}

  getInnerHTML(imageData: string | ArrayBuffer, fileName: string): string {
    // images
    if (
      fileName.endsWith('jpeg') ||
      fileName.endsWith('png')
      // fileName.endsWith('svg')
    ) {
      return `<img src="${imageData}" alt="imageBase64" class="img-html"/>`;
    }

    // videos
    if (fileName.endsWith('mp4')) {
      return '<i class="fas fa-file-video icon"></i>';
    }

    // icon
    if ((imageData as string).startsWith('data:image/x-icon;base64,')) {
      return '<i class="fas fa-file-image icon"></i>';
    }

    // pdf
    if (fileName.endsWith('pdf')) {
      return `<i class="fas fa-file-pdf icon"></i>`;
    }

    // txt files
    if (fileName.endsWith('txt') || fileName.endsWith('md')) {
      return `<i class="fas fa-file-alt icon"></i>`;
    }

    // word doc
    if (fileName.endsWith('doc') || fileName.endsWith('docx')) {
      return `<i class="fas fa-file-word icon"></i>`;
    }

    // excel files
    if (fileName.endsWith('xlsx')) {
      return `<i class="fas fa-file-excel icon"></i>`;
    }

    // powerpoint
    if (fileName.endsWith('ppt')) {
      return `<i class="fas fa-file-powerpoint icon"></i>`;
    }

    // audio
    if (fileName.endsWith('mp3')) {
      return `<i class="fas fa-file-audio icon"></i>`;
    }

    // zip files
    if (fileName.endsWith('zip') || fileName.endsWith('rar')) {
      return `<i class="fas fa-file-archive icon"></i>`;
    }

    // code files
    if (
      fileName.endsWith('ts') ||
      fileName.endsWith('js') ||
      fileName.endsWith('css') ||
      fileName.endsWith('scss') ||
      fileName.endsWith('c++') ||
      fileName.endsWith('html')
    ) {
      return `<i class="fas fa-file-code icon"></i>`;
    }

    // other types
    return `<i class="fas fa-file icon other-icon"></i>`;
  }
}
