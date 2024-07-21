import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { serviceRoutes } from '../services.array';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  public services = serviceRoutes;
}
