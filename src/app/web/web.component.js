import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
let WebComponent = class WebComponent {
    constructor(webportService, router) {
        this.webportService = webportService;
        this.router = router;
        this.webport = [];
    }
    ngOnInit() {
        this.webportService.getWebport().subscribe(data => {
            this.webport = data.webport;
            //console.log(this.webport); 
        });
    }
    navigateTo(path) {
        this.router.navigate([path]);
    }
    onNavigate(event, type, webportUrl) {
        //event.preventDefault(); // Prevent the default link behavior
        this.navigateTo(`/details/${type}/${webportUrl}`);
    }
};
WebComponent = __decorate([
    Component({
        selector: 'app-web',
        standalone: true,
        imports: [CommonModule],
        templateUrl: './web.component.html',
        styleUrls: ['./web.component.scss']
    })
], WebComponent);
export { WebComponent };
//# sourceMappingURL=web.component.js.map