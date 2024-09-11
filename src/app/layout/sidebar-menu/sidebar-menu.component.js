import { __decorate } from "tslib";
import { Component, ViewChild, HostListener } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { TooltipModule } from 'primeng/tooltip';
import { Tooltip } from 'primeng/tooltip';
import { CommonModule } from '@angular/common';
let SidebarMenuComponent = class SidebarMenuComponent {
    constructor(router) {
        this.router = router;
        this.sidebarVisible = false;
        this.tooltip = null;
    }
    toggleSidebar() {
        this.sidebarVisible = !this.sidebarVisible;
    }
    navigateTo(path) {
        this.router.navigate([path]);
        this.closeSidebar(); // Close the sidebar after navigation, removing the overlay
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
    // closeCallback(event: Event): void {
    //     this.sidebarRef.close(event);
    // }
    closeSidebar() {
        this.sidebarVisible = false;
    }
    onDocumentClick(event) {
        const clickedInside = event.target.closest('.sidebar, #ham');
        if (!clickedInside && this.sidebarVisible) {
            this.closeSidebar();
        }
    }
};
__decorate([
    ViewChild('sidebarRef')
], SidebarMenuComponent.prototype, "sidebarRef", void 0);
__decorate([
    ViewChild(Tooltip)
], SidebarMenuComponent.prototype, "tooltip", void 0);
__decorate([
    HostListener('document:click', ['$event'])
], SidebarMenuComponent.prototype, "onDocumentClick", null);
SidebarMenuComponent = __decorate([
    Component({
        selector: 'app-sidebar-menu',
        templateUrl: './sidebar-menu.component.html',
        standalone: true,
        imports: [SidebarModule, ButtonModule, RippleModule, AvatarModule, StyleClassModule, TooltipModule, CommonModule]
    })
], SidebarMenuComponent);
export { SidebarMenuComponent };
//# sourceMappingURL=sidebar-menu.component.js.map