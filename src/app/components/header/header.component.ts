import { NgClass } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('resizableDiv') resizableDiv!: ElementRef;
  @ViewChild('staticdiv') staticDiv!: ElementRef;
  scrollTop: number = 0

  ngOnInit(): void {
    this.updateHeight();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.updateHeight();
  }

  updateHeight() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const initialHeight = window.innerHeight;
    const minHeight = 121;
    this.scrollTop = scrollTop;
    console.log(scrollTop);


    let newHeight = initialHeight - scrollTop;

    if (newHeight < minHeight) {
      newHeight = minHeight;
    } else if (newHeight > initialHeight) {
      newHeight = initialHeight;
    }

    this.resizableDiv.nativeElement.style.height = `${newHeight}px`;
    this.staticDiv.nativeElement.style.height = `${newHeight}px`;
  }
  loaded: boolean = false;
  ngAfterContentInit(): void {
    setTimeout(() => {
      this.loaded = true;
    }, 2000);
  }
}
