import { Component, ElementRef, ViewChild, HostListener, ViewChildren, QueryList, PLATFORM_ID, Inject } from '@angular/core';
import { WizardsComponent } from '../../../home-page/wizards/wizards.component';
import { ServiceItemComponent } from '../../components/service-item/service-item.component';
import { isPlatformBrowser, NgFor } from '@angular/common';
import { TrackScrollDirective } from '../../../directives/wiewInWindow';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    WizardsComponent,
    ServiceItemComponent,
    NgFor,
    TrackScrollDirective
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  // @ViewChildren('trackedElement') trackedElements!: QueryList<ElementRef>;

  trackedItems = [
    { top: 100, height: '100vh', color: 'red', isCollapsed: false },
    { top: 200, height: '85vh', color: 'green', isCollapsed: false },
    { top: 300, height: '70vh', color: 'blue', isCollapsed: false }
  ];

  private isBrowser: boolean;
  activeRouteSignal: string | undefined = '';
  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: any,
  ) { this.isBrowser = isPlatformBrowser(this.platformId); }
  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //   this.calculateDistancesFromTop();
  // }

  // ngAfterViewInit() {
  //   this.calculateDistancesFromTop();
  // }

  // calculateDistancesFromTop() {
  //   if (this.isBrowser) {
  //     const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  //     this.trackedElements.forEach((element, index) => {
  //       const rect = element.nativeElement.getBoundingClientRect();
  //       const distanceFromTop = rect.top;
  //       const elementTop = this.trackedItems[index].top;
  //       if (distanceFromTop <= elementTop) {
  //         this.trackedItems[index].isCollapsed = true;
  //       } else {
  //         this.trackedItems[index].isCollapsed = false;
  //       }

  //       // console.log(`Element ${index} (Color: ${this.trackedItems[index].color}) Distance from viewport top:`, distanceFromTop, 'isCollapsed:', this.trackedItems[index].isCollapsed);
  //     });
  //   }
  // }
}
