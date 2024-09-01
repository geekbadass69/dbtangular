import { Component, OnInit } from '@angular/core';
import { webportService } from '../webport.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-web',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {

  webport: any[] = [];

  constructor(private webportService: webportService, private router: Router) { }
 
  ngOnInit(): void {
    this.webportService.getWebport().subscribe(data => {
      this.webport = data.webport;
       //console.log(this.webport); 
    });

  }
  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  onNavigate(event: Event, type: string, webportUrl: string) {
    //event.preventDefault(); // Prevent the default link behavior
    this.navigateTo(`/details/${type}/${webportUrl}`);
  }
}
