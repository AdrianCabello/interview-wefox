import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterString',
  pure: false
})
export class FilterStringPipe implements PipeTransform {

  transform(arr: Array<any>, arg: string): Array<any> {
    if (arr && typeof arg == 'string') {
      let term = new RegExp(arg.replace(/[aáäå]/gi, '[aáäå]')
        .replace(/[eéë]/gi, '[eéë]')
        .replace(/[iíï]/gi, '[iíï]')
        .replace(/[oóö]/gi, '[oóö]')
        .replace(/[uúü]/gi, '[uúü]'), 'i');

      return arr.filter(
        (element) => {
          return term.test(element.title);
        }
      )
    }
  }
}