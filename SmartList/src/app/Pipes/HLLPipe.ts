import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'HLLPipe'})
export class HLLPipe implements PipeTransform {
  transform(value: string): string {
    let newStr: string = "Count Distinct of Checklist's words in Description:" + value + ", (by Checklist's Description)";
    return newStr;
  }
}