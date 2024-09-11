import { __decorate } from "tslib";
import { Component, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { Tooltip } from 'primeng/tooltip';
let AboutComponent = class AboutComponent {
    constructor() {
        this.tooltip = null;
    }
    showTooltip() {
        if (this.tooltip) {
            this.tooltip.show();
        }
    }
    hideTooltip() {
        if (this.tooltip) {
            this.tooltip.hide();
        }
    }
    onDocumentTouchStart(event) {
        const targetElement = event.target;
        if (!targetElement.closest('.landingLinks')) {
            this.hideTooltip();
        }
    }
};
__decorate([
    ViewChild(Tooltip)
], AboutComponent.prototype, "tooltip", void 0);
__decorate([
    HostListener('document:touchstart', ['$event'])
], AboutComponent.prototype, "onDocumentTouchStart", null);
AboutComponent = __decorate([
    Component({
        selector: 'app-about',
        standalone: true,
        imports: [CommonModule, TooltipModule],
        templateUrl: './about.component.html',
        styleUrls: ['./about.component.scss']
    })
], AboutComponent);
export { AboutComponent };
//# sourceMappingURL=about.component.js.map