import { Component } from '@angular/core';
import { SidebarMenuComponent} from '../sidebar-menu/sidebar-menu.component'

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SidebarMenuComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
}

