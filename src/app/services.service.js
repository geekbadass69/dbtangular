import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ServiceService = class ServiceService {
    constructor(http) {
        this.http = http;
        this.jsonUrl = 'assets/services.json';
    }
    getServices() {
        return this.http.get(this.jsonUrl);
    }
};
ServiceService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ServiceService);
export { ServiceService };
//# sourceMappingURL=services.service.js.map