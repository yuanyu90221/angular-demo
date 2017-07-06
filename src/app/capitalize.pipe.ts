import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cap'
})
export class Capitalize implements PipeTransform {

  transform(value: string) {
    if (!value) {
      return '';
    }
    let formatted = '';
    const originArr = this.splitIntoArray(value);
    for (let i = 0; i < originArr.length; i++) {
      formatted += (i === 0) ? this.capFirst(originArr[i]) :
                              (originArr[i - 1] === 'the') ? this.capFirst(originArr[i]) : originArr[i];
      formatted += (i < originArr.length - 1) ? ' ' : '';
    }
    return formatted;
  }

  private capFirst(input: string) {
    if (!input || input.length < 2) {
      return '';
    }
    return input.substr(0, 1).toUpperCase() + input.substr(1);
  }

  private splitIntoArray(input: string) {
    return input.toLowerCase().split(' ').filter((world) => world.length > 0);
  }
}
