import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let webportService = class webportService {
    constructor(http) {
        this.http = http;
        this.jsonUrl = 'assets/web.json';
    }
    getWebport() {
        return this.http.get(this.jsonUrl);
    }
};
webportService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], webportService);
export { webportService };
//# sourceMappingURL=webport.service.js.map