import { Component, Input } from '@angular/core';
import { InViewDirective } from '../../../directives/scroll-directive';
import { TrackScrollDirective } from '../../../directives/wiewInWindow';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-service-page-item',
  standalone: true,
  imports: [TrackScrollDirective,
    NgStyle
  ],
  templateUrl: './service-page-item.component.html',
  styleUrl: './service-page-item.component.scss'
})
export class ServicePageItemComponent {
  @Input() activeClass?: string;
  @Input() elementTop?: number;
  @Input() scrollThresholdBottom?: number;

}
