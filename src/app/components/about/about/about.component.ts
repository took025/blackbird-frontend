import { Component } from '@angular/core';
import { AlsoCheckComponent } from '../../services/components/also-check/also-check.component';
import { LogosComponent } from '../../logos/logos.component';
import { BrandingComponent } from '../branding/branding.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AlsoCheckComponent, LogosComponent , BrandingComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  slides = [
    {
      id : 1,
      name : 'Tamuna Rostiashvili',
      job : 'CEO',
      text : 'When you run your hand along the weathered, amber-hued wooden pillars or when youre enveloped in the delightful scent of wooden structures, have you ever considered the mountains where the trees grew? Well-maintained forests nurture essential nutrients and minerals for all forms of',
    },
    {
      id : 2,
      name : 'Tamuna Rostiashvili',
      job : 'CEO',
      text : 'When you run your hand along the weathered, amber-hued wooden pillars or when youre enveloped in the delightful scent of wooden structures, have you ever considered the mountains where the trees grew? Well-maintained forests nurture essential nutrients and minerals for all forms of',
    },
    {
      id : 3,
      name : 'Tamuna Rostiashvili',
      job : 'CEO',
      text : 'When you run your hand along the weathered, amber-hued wooden pillars or when youre enveloped in the delightful scent of wooden structures, have you ever considered the mountains where the trees grew? Well-maintained forests nurture essential nutrients and minerals for all forms of',
    },
    {
      id : 4,
      name : 'Tamuna Rostiashvili',
      job : 'CEO',
      text : 'When you run your hand along the weathered, amber-hued wooden pillars or when youre enveloped in the delightful scent of wooden structures, have you ever considered the mountains where the trees grew? Well-maintained forests nurture essential nutrients and minerals for all forms of',
    },
    {
      id : 5,
      name : 'Tamuna Rostiashvili',
      job : 'CEO',
      text : 'When you run your hand along the weathered, amber-hued wooden pillars or when youre enveloped in the delightful scent of wooden structures, have you ever considered the mountains where the trees grew? Well-maintained forests nurture essential nutrients and minerals for all forms of',
    },
  ]
}
