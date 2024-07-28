import { Component } from '@angular/core';
import { WizardsComponent } from '../../../home-page/wizards/wizards.component';
import { ServiceItemComponent } from '../../components/service-item/service-item.component';
import { AlsoCheckComponent } from '../../components/also-check/also-check.component';
import { InViewNewDirective } from '../../../directives/shrink-directive';
import { ServicePageItemComponent } from '../../components/service-page-item/service-page-item.component';
@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [WizardsComponent, ServiceItemComponent, AlsoCheckComponent,
    InViewNewDirective,
    ServicePageItemComponent],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})
export class SalesComponent {

}
