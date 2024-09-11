import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
let ServicesComponent = class ServicesComponent {
    constructor(ServiceService) {
        this.ServiceService = ServiceService;
        this.services = [];
    }
    ngOnInit() {
        this.ServiceService.getServices().subscribe(data => {
            this.services = data.services;
        });
        const tooltipOptions = {
            showDelay: 150,
            autoHide: false,
            tooltipEvent: 'hover',
            tooltipPosition: 'center'
        };
    }
};
ServicesComponent = __decorate([
    Component({
        selector: 'app-services',
        standalone: true,
        imports: [CommonModule, TooltipModule],
        templateUrl: './services.component.html',
        styleUrls: ['./services.component.scss']
    })
], ServicesComponent);
export { ServicesComponent };
//# sourceMappingURL=services.component.js.map