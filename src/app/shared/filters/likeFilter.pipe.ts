import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})
export class LikeFilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
        if(!items) return [];
        if(!searchText) return items;

        let filterKeys = Object.keys(searchText);

        return items.filter(item =>
            filterKeys.reduce((memo, keyname) => 
                (memo && new RegExp(searchText[keyname], 'gi')).test(item[keyname])
                //(item[keyname] && item[keyname].toString().toLowerCase().includes(searchText[keyname].toString()))
                || searchText[keyname] === "", true ) );
        // searchText = searchText.toLowerCase();
        // return items.filter( it => {
        // return it.toString().toLowerCase().includes(searchText);
    // });
   }
}