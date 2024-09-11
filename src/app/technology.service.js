import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let TechnologyService = class TechnologyService {
    constructor(http) {
        this.http = http;
        this.jsonUrl = 'assets/technologies.json';
    }
    getTechnologies() {
        return this.http.get(this.jsonUrl);
    }
};
TechnologyService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TechnologyService);
export { TechnologyService };
//# sourceMappingURL=technology.service.js.map