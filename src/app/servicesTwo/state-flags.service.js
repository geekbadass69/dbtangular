import { __decorate } from "tslib";
// src/app/services/state-flags.service.ts
import { Injectable } from '@angular/core';
let StateFlagsService = class StateFlagsService {
    constructor(http) {
        this.http = http;
        this.flagsUrl = 'assets/state-flags.json';
    }
    getStateFlags() {
        return this.http.get(this.flagsUrl);
    }
};
StateFlagsService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], StateFlagsService);
export { StateFlagsService };
//# sourceMappingURL=state-flags.service.js.map