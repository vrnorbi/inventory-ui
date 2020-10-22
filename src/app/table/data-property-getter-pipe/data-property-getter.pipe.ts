import {Pipe, PipeTransform} from '@angular/core';
import get = Reflect.get;

@Pipe({
  name: 'dataPropertyGetter'
})
export class DataPropertyGetterPipe implements PipeTransform {

  transform(object: any, keyName: string, ...args: unknown[]): unknown {
    // return object[keyName];
    return get(object, keyName);
  }

}
