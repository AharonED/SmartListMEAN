import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'HLLPipe'})
export class HLLPipe implements PipeTransform {
  transform(value: string): string {
    let newStr: string = "Count Distinct of groups words:" + value + ", (by Groups' Titles)";
    return newStr;
  }
}