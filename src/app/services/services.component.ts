import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services.service';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, TooltipModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  
  services: any[] = [];

  constructor(private ServiceService: ServiceService) { }
 
  ngOnInit(): void {
    this.ServiceService.getServices().subscribe(data => {
      this.services = data.services;
    });

    const tooltipOptions = {
      showDelay: 150,
      autoHide: false,
      tooltipEvent: 'hover',
      tooltipPosition: 'center'
  }

  }
}
