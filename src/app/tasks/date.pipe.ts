import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'date'
})
export class DatePipe implements PipeTransform {

  transform(value: Date, ...args: any[]): any {
    return `${value.toLocaleDateString()} - ${value.toLocaleTimeString()}`;
  }

}
