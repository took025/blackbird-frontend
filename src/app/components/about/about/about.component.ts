import { Component } from '@angular/core';
import { AlsoCheckComponent } from '../../services/components/also-check/also-check.component';
import { LogosComponent } from '../../logos/logos.component';
import { BrandingComponent } from '../branding/branding.component';
import { FoundersComponent } from '../founders/founders.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AlsoCheckComponent, LogosComponent , BrandingComponent , FoundersComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
}
