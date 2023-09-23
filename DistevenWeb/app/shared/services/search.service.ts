import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SearchService {
    searchVal: Subject<Object> = new Subject<Object>();
    constructor() { }
}
