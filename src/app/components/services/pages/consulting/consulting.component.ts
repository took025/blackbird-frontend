import { Component } from '@angular/core';
import { WizardsComponent } from '../../../home-page/wizards/wizards.component';
import { ServiceItemComponent } from '../../components/service-item/service-item.component';
import { ServicePageItemComponent } from '../../components/service-page-item/service-page-item.component';
import { TrackSectionScrollDirective } from '../../../directives/test';
import { InViewDirective } from '../../../directives/scroll-directive';
import { HoverBlockComponent } from '../../../hover-block/hover-block.component';
import { LogosComponent } from '../../../logos/logos.component';

@Component({
  selector: 'app-consulting',
  standalone: true,
  imports: [WizardsComponent,
    ServiceItemComponent,
    ServicePageItemComponent,
    TrackSectionScrollDirective,
    InViewDirective,
    HoverBlockComponent,
    LogosComponent
  ],
  templateUrl: './consulting.component.html',
  styleUrl: './consulting.component.scss'
})
export class ConsultingComponent {

}
