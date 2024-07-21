import { Component, ElementRef, HostListener, Inject, PLATFORM_ID, Renderer2, signal } from '@angular/core'; import { Subject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { WizardsComponent } from '../../../home-page/wizards/wizards.component';
import { ServiceItemComponent } from '../../components/service-item/service-item.component';
import { InViewDirective } from '../../../directives/scroll-directive';
import { ServicePageItemComponent } from '../../components/service-page-item/service-page-item.component';
import { AlsoCheckComponent } from '../../components/also-check/also-check.component';
import { TrackSectionScrollDirective } from '../../../directives/test';

@Component({
  selector: 'app-marketing',
  standalone: true,
  imports: [WizardsComponent, ServiceItemComponent, InViewDirective, ServicePageItemComponent,
    AlsoCheckComponent,
    TrackSectionScrollDirective],
  templateUrl: './marketing.component.html',
  styleUrl: './marketing.component.scss'
})
export class MarketingComponent {
  private scrollSubject = new Subject<MouseEvent>();
  private lastY = 0;
  private isBrowser: boolean;
  activeRouteSignal: string | undefined = '';
  constructor(
    private el: ElementRef, private renderer: Renderer2,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {


    this.isBrowser = isPlatformBrowser(this.platformId);
    //   this.scrollSubject.pipe(
    //     debounceTime(100) // Adjust debounce time as needed (in milliseconds)
    //   ).subscribe((event: MouseEvent) => {
    //     if (event.clientY > this.lastY) {
    //       console.log('Mouse moved down');
    //       // Add your mouse move down logic here
    //     } else if (event.clientY < this.lastY) {
    //       console.log('Mouse moved up');
    //       // Add your mouse move up logic here
    //     }
    //     this.lastY = event.clientY;
    //   });
    // }

    // @HostListener('mousemove', ['$event'])
    // onMouseMove(event: MouseEvent) {
    //   if (this.isBrowser) {
    //     this.scrollSubject.next(event);
    //   }
  }


}
