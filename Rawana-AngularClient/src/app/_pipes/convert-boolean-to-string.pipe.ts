import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertBooleanToString'
})
export class ConvertBooleanToStringPipe implements PipeTransform {

  transform(input: boolean, strOptions?: string[]): any 
  {
    debugger
    if (strOptions == null)
    {
      strOptions = ["Yes", "No"];
    }
    let result : string = input ? strOptions[0] : strOptions[1];
    return result;
  }

}
