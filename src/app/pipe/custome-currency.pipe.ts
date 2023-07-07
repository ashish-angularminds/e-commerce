import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customeCurrency'
})
export class CustomeCurrencyPipe implements PipeTransform {

  transform(val: number, args: string): any {
    // return this.fun(val, args);
    if (args === 'INR' || args === '₹') {
      return Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
      }).format(Number(val));
    }
    else if (args === 'USD' || args === '$') {
      return Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
      }).format(Number(val));
    }
    else {
      return val;
    }
  }

  // fun(val: number, args: string): any {
    // let value: string = '' + val;
    // let output: string = '00.';
    // let final = '';
    // final += '₹';
    
    // final += '$'

    // if (value.length > 3) {
    //   let j = 0
    //   for (let i = value.length - 1; i >= 0; i--) {
    //     j++;
    //     if (j == 4 || j == 7 || j == 10) {
    //       output += ',';
    //     }
    //     output += value[i];
    //   }
    //   for (let i = output.length - 1; i >= 0; i--) {
    //     final += output[i];
    //   }
    // }
    // else {
    //   final += value;
    // }

    // return final;
  // }
}
