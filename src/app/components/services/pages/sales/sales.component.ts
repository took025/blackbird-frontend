import { Component} from '@angular/core';
import { WizardsComponent } from '../../../home-page/wizards/wizards.component';
import { ServiceItemComponent } from '../../components/service-item/service-item.component';
import { AlsoCheckComponent } from '../../components/also-check/also-check.component';
@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [WizardsComponent,ServiceItemComponent ,AlsoCheckComponent],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.scss'
})
export class SalesComponent {

}
