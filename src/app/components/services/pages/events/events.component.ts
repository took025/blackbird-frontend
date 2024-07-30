import {
  Component,
  ElementRef,
  ViewChild,
  HostListener,
  ViewChildren,
  QueryList,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { WizardsComponent } from '../../../home-page/wizards/wizards.component';
import { ServiceItemComponent } from '../../components/service-item/service-item.component';
import { isPlatformBrowser, NgFor } from '@angular/common';
import { TrackScrollDirective } from '../../../directives/wiewInWindow';
import { ServicePageItemComponent } from '../../components/service-page-item/service-page-item.component';
import { TrackSectionScrollDirective } from '../../../directives/test';
import { LogosComponent } from '../../../logos/logos.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    WizardsComponent,
    ServiceItemComponent,
    ServicePageItemComponent,
    TrackSectionScrollDirective,
    LogosComponent
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
})
export class EventsComponent {
  trackedItems = [
    { top: 100, height: '100vh', color: 'red', isCollapsed: false },
    { top: 200, height: '85vh', color: 'green', isCollapsed: false },
    { top: 300, height: '70vh', color: 'blue', isCollapsed: false },
  ];

  activeRouteSignal: string | undefined = '';
}
