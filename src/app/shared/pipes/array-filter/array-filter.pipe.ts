import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayFilter'
})
export class ArrayFilterPipe implements PipeTransform {

  transform(array: any[], filter?:any): any {

    return array.filter(({nombre}) => nombre.toUpperCase().includes(filter.toUpperCase()));

  }

}
