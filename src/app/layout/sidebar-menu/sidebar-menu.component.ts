import { Component, ViewChild, HostListener } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';
import { TooltipModule } from 'primeng/tooltip';
import { Tooltip } from 'primeng/tooltip';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  standalone: true,
  imports: [SidebarModule, ButtonModule, RippleModule, AvatarModule, StyleClassModule, TooltipModule, CommonModule]
})
export class SidebarMenuComponent {

  sidebarVisible: boolean = false;

  constructor(private router: Router) {}

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
    this.closeSidebar(); // Close the sidebar after navigation, removing the overlay
  }

  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  @ViewChild(Tooltip) tooltip: Tooltip | null = null;

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

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const clickedInside = (event.target as HTMLElement).closest('.sidebar, #ham');
    if (!clickedInside && this.sidebarVisible) {
      this.closeSidebar();
    }
  }
  
}
