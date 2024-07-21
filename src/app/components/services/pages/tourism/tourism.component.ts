import { Component, } from '@angular/core';
import { WizardsComponent } from '../../../home-page/wizards/wizards.component';
import { ServiceItemComponent } from '../../components/service-item/service-item.component';
import { CollapseOnScrollDirective } from '../../../directives/collapseSCroll';
import { ServicePageItemComponent } from '../../components/service-page-item/service-page-item.component';
import { TrackSectionScrollDirective } from '../../../directives/test';

@Component({
  selector: 'app-tourism',
  standalone: true,
  imports: [WizardsComponent, ServiceItemComponent, ServicePageItemComponent,
    TrackSectionScrollDirective
  ],
  templateUrl: './tourism.component.html',
  styleUrl: './tourism.component.scss'
})
export class TourismComponent {

}
