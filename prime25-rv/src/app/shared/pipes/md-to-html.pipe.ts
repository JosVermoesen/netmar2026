import { Pipe, PipeTransform } from '@angular/core';
import { marked } from 'marked';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'mdToHtml',
    standalone: true,
})
export class MdToHtmlPipe implements PipeTransform {
  constructor(protected sanitizer: DomSanitizer) {}

  transform(value: any, args?: any): any {
    if (value === null || value === undefined) {
      return '';
    }

    const markdown = String(value)
      .replace(/\\r\\n/g, '\n')
      .replace(/\\n/g, '\n');

    return this.sanitizer.bypassSecurityTrustHtml(marked.parse(markdown, { gfm: true, breaks: true }));
  }
}
