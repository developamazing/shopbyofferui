import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './start/app.component';

import { NavComponent } from './shared/navbar.component';
import { HomeComponent } from './home/home.component';
import { MarketerComponent } from './marketers/marketers.component';
import { MarketerViewComponent } from './marketers/marketer.view';

import { SupplierComponent } from './suppliers/suppliers.component';
import { ConsumerOffersComponent } from './consumeroffers/consumeroffers.component';

import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './shared/footer.component';
import { AppRoutingModule } from './shared/app.routing';

import { DataService } from './shared/services/dataService'
import { Configuration } from './app.constants';

import { LikeFilterPipe } from './shared/filters/likeFilter.pipe';
import { ConsumerOfferFilterPipe } from './shared/filters/consumerOfferFilter.pipe';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        MarketerComponent,
        MarketerViewComponent,
        SupplierComponent,
        ConsumerOffersComponent,
        FooterComponent,
        ErrorComponent,
        LikeFilterPipe,
        ConsumerOfferFilterPipe
    ],
    providers:[
        Configuration, DataService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
