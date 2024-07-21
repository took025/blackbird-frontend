import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { servicesData } from '../../services.array';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-service-item',
  standalone: true,
  imports: [],
  templateUrl: './service-item.component.html',
  styleUrl: './service-item.component.scss'
})
export class ServiceItemComponent {
  private isBrowser!: boolean;
  public service: any;
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    let routerActive = this.router.url.split('/').pop()
    if (this.isBrowser) {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe((route: any) => {
        routerActive = route.urlAfterRedirects;
      });
    }
    this.service = servicesData.filter(item => item.name === routerActive)[0];
  }
}
