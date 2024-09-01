import { Component, ViewChild, HostListener  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { Tooltip } from 'primeng/tooltip';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,TooltipModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
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

  @HostListener('document:touchstart', ['$event'])
  onDocumentTouchStart(event: TouchEvent) {
    const targetElement = event.target as HTMLElement;
    if (!targetElement.closest('.landingLinks')) {
      this.hideTooltip();
    }
  }
}
