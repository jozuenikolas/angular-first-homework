import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'arrayFilter'
})
export class ArrayFilterPipe implements PipeTransform {

  transform(array: any[], filter?: any): any {

    return array.filter(({
                           firstName,
                           lastName
                         }) => firstName.toUpperCase().includes(filter.toUpperCase()) || lastName.toUpperCase().includes(filter.toUpperCase()));

  }

}
