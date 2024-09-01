import { Component, OnInit } from '@angular/core';
import { TechnologyService } from '../technology.service';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';


@Component({
  selector: 'app-tech',
  standalone: true,
  imports: [CommonModule, TooltipModule],
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss'],
})
export class TechComponent implements OnInit {



  tooltipWidth: string = '350px';
  tooltipArrowSize: string = '10px';
  tooltipArrowPosition: string = '50%'; // Centered by default

  adjustTooltipSizeAndPosition(width: string, arrowSize: string, arrowPosition: string) {
    this.tooltipWidth = width;
    this.tooltipArrowSize = arrowSize;
    this.tooltipArrowPosition = arrowPosition;
  }



  
  technologies: any[] = [];

  constructor(private technologyService: TechnologyService) { }
 
  ngOnInit(): void {
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
}

