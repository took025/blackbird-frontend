import { Component } from '@angular/core';
import { servicesData } from '../../services/services.array';
import { NgClass, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-succes-cases',
  standalone: true,
  imports: [NgFor , NgClass , RouterLink],
  templateUrl: './succes-cases.component.html',
  styleUrl: './succes-cases.component.scss'
})
export class SuccesCasesComponent {
  public services = servicesData;
  public activeFilter = 'all'
  listArray = [{}, {}, {} , {}]

  onClickFilter(item:string) {
    this.activeFilter = item;
  }

}
