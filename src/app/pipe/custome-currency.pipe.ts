import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customeCurrency'
})
export class CustomeCurrencyPipe implements PipeTransform {

  transform(val: number, args: string): string {
    return this.fun(val, args);
  }

  fun(val: number, args: string): string {
    let value: string = '' + val;
    let output: string = '00.';
    let final = '';
    if (args === 'INR') {
      final += '₹'
    }
    else if (args === 'USD') {
      final += '$'
    }

    if (value.length > 3) {
      let j = 0
      for (let i = value.length - 1; i >= 0; i--) {
        j++;
        if (j == 4 || j == 7 || j == 10) {
          output += ',';
        }
        output += value[i];
      }
      for (let i = output.length - 1; i >= 0; i--) {
        final += output[i];
      }
    }
    else {
      final += value;
    }

    return final;
  }
}
