import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.jsonUrl = 'assets/records.json';
    }
    getRecordByName(name) {
        return this.http.get('assets/records.json').pipe(map((records) => records.find(record => record.name === name)));
    }
};
DataService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], DataService);
export { DataService };
//# sourceMappingURL=data.service.js.map