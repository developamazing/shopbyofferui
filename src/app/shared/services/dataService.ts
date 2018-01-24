import 'rxjs/add/operator/map';

import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Configuration } from '../../app.constants';

@Injectable()
export class DataService {
    public restEntityName: string;
    private actionUrl: string;
    private restUrl : string;
    public statusMsg: string;

    constructor(private http: HttpClient, private _configuration: Configuration) {
        this.actionUrl = _configuration.ServerWithApiUrl;
        this.statusMsg = "Invoking..." + this.actionUrl;
        //this.http.get('http://dev.ushopper.net/offerprocessing/marketer/all').subscribe(data => { alert(data);});
    }
    public getData<T>()
    {
        this.restUrl = this.actionUrl + this.restEntityName + '/all';
        console.log('getData invoking '+ this.restUrl);
        return this.http.get<T>(this.restUrl);
    }

    public getDataByQueryString<T>(querystring: string)
    {
        this.restUrl = this.actionUrl + this.restEntityName + querystring;
        console.log('getDataByQueryString invoking '+ this.restUrl);
        return this.http.get<T>(this.restUrl);
    }
    
    public getAll<T>(): Observable<T> {
        this.restUrl = this.actionUrl + this.restEntityName + '/all';
        console.log('getAll invoking '+ this.restUrl);
        return this.http.get<T>(this.restUrl);
    }

    public getSingle<T>(id: number): Observable<T> {
        this.restUrl = this.actionUrl + this.restEntityName + '/' + id;
        console.log('getSingle invoking '+ this.restUrl);
        return this.http.get<T>(this.restUrl);
    }

    public add<T>(itemName: string): Observable<T> {
        const toAdd = JSON.stringify({ ItemName: itemName });
        this.restUrl = this.actionUrl + this.restEntityName + '/' ;
        console.log('add invoking '+ this.restUrl);
        return this.http.post<T>(this.restUrl, toAdd);
    }

    public update<T>(id: number, itemToUpdate: any): Observable<T> {
        this.restUrl = this.actionUrl + this.restEntityName + '/' + id;
        console.log('update invoking '+ this.restUrl);
        return this.http
            .put<T>(this.restUrl, JSON.stringify(itemToUpdate));
    }

    public delete<T>(id: number): Observable<T> {
        this.restUrl = this.actionUrl + this.restEntityName + '/' + id;
        console.log('delete invoking '+ this.restUrl);
        return this.http.delete<T>(this.restUrl);
    }
}

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        console.log(JSON.stringify(req.headers));
        return next.handle(req);
    }
}
