import { Component, Input  } from '@angular/core';
import { iMarketer } from '../app.restservice.types';

@Component({
    selector: 'marketerview',
    templateUrl: './marketer.view.html',
    styleUrls: ['../app.styles.css']
})
export class MarketerViewComponent {
    @Input()
    current: iMarketer;
}