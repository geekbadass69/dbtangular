import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';
let FooterComponent = class FooterComponent {
    constructor() {
        this.currentYear = new Date().getFullYear();
    }
    ngOnInit() { }
};
FooterComponent = __decorate([
    Component({
        selector: 'app-footer',
        standalone: true,
        imports: [ScrollToTopComponent],
        templateUrl: './footer.component.html',
        styleUrls: ['./footer.component.scss']
    })
], FooterComponent);
export { FooterComponent };
//# sourceMappingURL=footer.component.js.map