import { Component } from '@angular/core';
import { WizardsComponent } from '../../../home-page/wizards/wizards.component';
import { ServiceItemComponent } from '../../components/service-item/service-item.component';
import { ServicePageItemComponent } from '../../components/service-page-item/service-page-item.component';
import { AlsoCheckComponent } from '../../components/also-check/also-check.component';
import { InViewNewDirective } from '../../../directives/shrink-directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketing',
  standalone: true,
  imports: [WizardsComponent, ServiceItemComponent, AlsoCheckComponent,
    InViewNewDirective,
    ServicePageItemComponent],
  templateUrl: './marketing.component.html',
  styleUrl: './marketing.component.scss'
})
export class MarketingComponent {
  public url = this.router.url.split('/').pop()
  activeRouteSignal: string | undefined = '';
  constructor(
    private router: Router,
  ) {
  }


}
