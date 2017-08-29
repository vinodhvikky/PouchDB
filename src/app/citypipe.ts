import {Injectable, Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'cityfilter'
})
@Injectable()
export class CityFilterPipe implements PipeTransform {
    transform(items: any[], city: string): any[] {
        if (!items) {
          return [];
        }
        return items.filter(it => it.city === city);
    }
}
