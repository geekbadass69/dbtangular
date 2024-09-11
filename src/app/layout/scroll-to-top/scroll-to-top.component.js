// import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { __decorate } from "tslib";
// @Component({
//   selector: 'app-scroll-to-top',
//   standalone: true,
//   imports: [],
//   templateUrl: './scroll-to-top.component.html',
//   styleUrl: './scroll-to-top.component.scss'
// })
// export class ScrollToTopComponent implements OnInit {
//   constructor() {}
//   scrollToTop() {
//     (function smoothscroll() {
//         var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
//         if (currentScroll > 0) {
//             window.requestAnimationFrame(smoothscroll);
//             window.scrollTo(0, currentScroll - (currentScroll / 8));
//         }
//     })();
//   }
//   ngOnInit() { }
// }
import { Component, HostListener } from '@angular/core';
let ScrollToTopComponent = class ScrollToTopComponent {
    constructor() {
        this.showScrollTop = false;
    }
    onWindowScroll() {
        // Show or hide the button based on scroll position
        this.showScrollTop = window.scrollY > 300;
    }
    scrollToTop() {
        (function smoothscroll() {
            const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
            if (currentScroll > 0) {
                window.requestAnimationFrame(smoothscroll);
                window.scrollTo(0, currentScroll - (currentScroll / 8));
            }
        })();
    }
    ngOnInit() { }
};
__decorate([
    HostListener('window:scroll', [])
], ScrollToTopComponent.prototype, "onWindowScroll", null);
ScrollToTopComponent = __decorate([
    Component({
        selector: 'app-scroll-to-top',
        standalone: true,
        templateUrl: './scroll-to-top.component.html',
        styleUrls: ['./scroll-to-top.component.scss'] // Ensure the correct property name: styleUrls
    })
], ScrollToTopComponent);
export { ScrollToTopComponent };
//# sourceMappingURL=scroll-to-top.component.js.map