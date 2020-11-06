import {Injectable} from '@angular/core';

@Injectable()
export class ColorService {

  getColorForValue(value: number, threshold: number): string {
    return value > threshold ? 'green' : 'red';
  }

}
