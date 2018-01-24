import { Pipe, PipeTransform } from '@angular/core';
import { iConsumerOffer } from '../../app.restservice.types';

@Pipe({
  name: 'consumerOfferFilter'
})
export class ConsumerOfferFilterPipe implements PipeTransform {
  transform(offers: iConsumerOffer[], searchText: string): any[] {
        if(!offers) return [];
        if(!searchText) return offers;
        //return items.filter(item =>
        //    filterKeys.reduce((memo, keyname) => 
        //        (memo && new RegExp(searchText[keyname], 'gi')).test(item[keyname])
        //       //(item[keyname] && item[keyname].toString().toLowerCase().includes(searchText[keyname].toString()))
        //        || searchText[keyname] === "", true ) );
        searchText = searchText.toLowerCase();
         return offers.filter( consuemrOffer => {
         return consuemrOffer.coconsumerKeyId.handle.toString().toLowerCase().includes(searchText);
     });
   }
}