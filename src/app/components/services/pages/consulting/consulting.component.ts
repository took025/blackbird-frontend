import { Component} from '@angular/core';
import { WizardsComponent } from '../../../home-page/wizards/wizards.component';
import { ServiceItemComponent } from '../../components/service-item/service-item.component';

@Component({
  selector: 'app-consulting',
  standalone: true,
  imports: [WizardsComponent,ServiceItemComponent],
  templateUrl: './consulting.component.html',
  styleUrl: './consulting.component.scss'
})
export class ConsultingComponent {

}
