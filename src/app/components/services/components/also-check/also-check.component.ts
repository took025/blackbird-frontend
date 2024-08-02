import { Component, Input } from '@angular/core';
import { serviceRoutes, servicesData } from '../../services.array';
import { Router, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-also-check',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './also-check.component.html',
  styleUrl: './also-check.component.scss',
})
export class AlsoCheckComponent {
  @Input() hasHeader?: boolean = true;

  public services = servicesData.filter(
    (item) => item.name !== this.router.url.split('/').pop()
  );
  constructor(private router: Router) {}
  ngOnInit(): void {}
}
