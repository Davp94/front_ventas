import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercase'
})
export class UppercasePipe implements PipeTransform {

  constructor(){}

  transform(value: string): string {
    return value.toUpperCase();
  }

}
