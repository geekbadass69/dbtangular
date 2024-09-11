import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
let TechComponent = class TechComponent {
    adjustTooltipSizeAndPosition(width, arrowSize, arrowPosition) {
        this.tooltipWidth = width;
        this.tooltipArrowSize = arrowSize;
        this.tooltipArrowPosition = arrowPosition;
    }
    constructor(technologyService) {
        this.technologyService = technologyService;
        this.tooltipWidth = '350px';
        this.tooltipArrowSize = '10px';
        this.tooltipArrowPosition = '50%'; // Centered by default
        this.technologies = [];
    }
    ngOnInit() {
        this.technologyService.getTechnologies().subscribe(data => {
            this.technologies = data.technologies;
        });
        //   const tooltipOptions = {
        //     showDelay: 350,
        //     autoHide: false,
        //     tooltipEvent: 'hover',
        //     tooltipPosition: 'center'
        // }
    }
};
TechComponent = __decorate([
    Component({
        selector: 'app-tech',
        standalone: true,
        imports: [CommonModule, TooltipModule],
        templateUrl: './tech.component.html',
        styleUrls: ['./tech.component.scss'],
    })
], TechComponent);
export { TechComponent };
//# sourceMappingURL=tech.component.js.map