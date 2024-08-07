import { Component } from '@angular/core';
import { AlsoCheckComponent } from '../../services/components/also-check/also-check.component';
import { NgClass, NgFor, NgStyle } from '@angular/common';
import { serviceRoutes } from '../../services/services.array';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-inner',
  standalone: true,
  imports: [AlsoCheckComponent, NgStyle, NgFor , NgClass , RouterLink],
  templateUrl: './about-inner.component.html',
  styleUrl: './about-inner.component.scss'
})
export class AboutInnerComponent {
  brandBirds = serviceRoutes;
  activeBird = 'marketing'
  colorsArray = [
    {
      id: 1,
      color: '#B80E45'
    },
    {
      id: 1,
      color: '#0A1A3F'
    },
    {
      id: 1,
      color: '#600E06'
    },
    {
      id: 1,
      color: '#E69E3A'
    },
    {
      id: 1,
      color: '#591E7F'
    },
    {
      id: 1,
      color: '#B80E45'
    },
    {
      id: 1,
      color: '#000000'
    },
  ]

  activeItem(item:any) {
    console.log(item);
    
    this.activeBird = item.name
  }

  getStyles(item: { name: string, color: string }) {
    return {
      'background-image': `url('../../../../assets/img/services/${item.name}.svg')`,
      'background-color': item.color
    };
  }
}
