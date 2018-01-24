import { Component, OnInit  } from '@angular/core';
import { DataService } from '../shared/services/dataService';
import { ConsumerOffersResponse } from '../app.restservice.types';
import { iConsumerOffer } from '../app.restservice.types';

@Component({
    templateUrl: './consumeroffers.component.html',
    styleUrls: ['../app.styles.css']
})
export class ConsumerOffersComponent implements OnInit {
    public message: string;
    public allConsumerOffers: any[];

    constructor(
        private _dataService: DataService) {
        _dataService.restEntityName = "consumerbidoffer";
        this.message = _dataService.statusMsg;
    }
    
    ngOnInit() {
        // this._slimLoadingBarService.start();
        this._dataService
            //.getAll<any[]>()
            .getDataByQueryString<iConsumerOffer[]>("/adminHandle?markterName=My%20Deals%20Den&marketerType=Online")
            .subscribe((data: iConsumerOffer[]) => { this.allConsumerOffers = data; //alert(data.responseMessage);
                        },
                        error => () => {
                            alert('error');
                        },
                        () => {
                            // success
                            // alert("data:" + this.allConsumerOffers);
                        });
            this.message = this._dataService.statusMsg;
   }
}