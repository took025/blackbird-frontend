import { isPlatformBrowser, NgFor } from '@angular/common';
import { Component, HostListener, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-founders',
  standalone: true,
  imports: [NgFor],
  templateUrl: './founders.component.html',
  styleUrl: './founders.component.scss'
})
export class FoundersComponent {
  slides = [
    {
      id: 1,
      name: 'Tamuna Rostiashvili',
      job: 'CEO',
      text: 'When you run your hand along the weathered, amber-hued wooden pillars or when youre enveloped in the delightful scent of wooden structures, have you ever considered the mountains where the trees grew? Well-maintained forests nurture essential nutrients and minerals for all forms of',
    },
    {
      id: 2,
      name: 'Tamuna Rostiashvili',
      job: 'CEO',
      text: 'When you run your hand along the weathered, amber-hued wooden pillars or when youre enveloped in the delightful scent of wooden structures, have you ever considered the mountains where the trees grew? Well-maintained forests nurture essential nutrients and minerals for all forms of',
    },
    {
      id: 3,
      name: 'Tamuna Rostiashvili',
      job: 'CEO',
      text: 'When you run your hand along the weathered, amber-hued wooden pillars or when youre enveloped in the delightful scent of wooden structures, have you ever considered the mountains where the trees grew? Well-maintained forests nurture essential nutrients and minerals for all forms of',
    },
    {
      id: 4,
      name: 'Tamuna Rostiashvili',
      job: 'CEO',
      text: 'When you run your hand along the weathered, amber-hued wooden pillars or when youre enveloped in the delightful scent of wooden structures, have you ever considered the mountains where the trees grew? Well-maintained forests nurture essential nutrients and minerals for all forms of',
    },
    {
      id: 5,
      name: 'Tamuna Rostiashvili',
      job: 'CEO',
      text: 'When you run your hand along the weathered, amber-hued wooden pillars or when youre enveloped in the delightful scent of wooden structures, have you ever considered the mountains where the trees grew? Well-maintained forests nurture essential nutrients and minerals for all forms of',
    },
  ]
  horizontalScrollContainer!: HTMLElement;
  isHorizontalScrollActive = false;
  isBrowser: boolean;
  lastScrollLeft = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngAfterViewInit() {
    if (this.isBrowser) {
      this.horizontalScrollContainer = document.querySelector('.horizontal-scroll-container') as HTMLElement;
    }
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isBrowser) {
      const rect = this.horizontalScrollContainer.getBoundingClientRect();
      const isInViewport = rect.top < 200 && rect.top > -200;

      if (isInViewport && !this.isHorizontalScrollActive) {
        this.isHorizontalScrollActive = true;
        this.activateHorizontalScroll();
      } else if (!isInViewport && this.isHorizontalScrollActive) {
        this.isHorizontalScrollActive = false;
        (window as any).removeEventListener('wheel', this.horizontalScrollHandler, { passive: false });
      }
    }
  }

  private activateHorizontalScroll() {
    (window as any).addEventListener('wheel', this.horizontalScrollHandler, { passive: false });
  }

  private horizontalScrollHandler = (event: WheelEvent) => {
    if (this.isHorizontalScrollActive) {
      event.preventDefault();
      const delta = Math.sign(event.deltaY);
      const newScrollLeft = this.horizontalScrollContainer.scrollLeft + delta * 50; // Adjust the scroll speed as needed

      if (newScrollLeft <= 0) {
        this.horizontalScrollContainer.scrollLeft = 0;
        this.isHorizontalScrollActive = false;
        (window as any).removeEventListener('wheel', this.horizontalScrollHandler, { passive: false });
      } else if (newScrollLeft >= (this.horizontalScrollContainer.scrollWidth - window.innerWidth)) {
        this.horizontalScrollContainer.scrollLeft = this.horizontalScrollContainer.scrollWidth - window.innerWidth;
        this.isHorizontalScrollActive = false;
        (window as any).removeEventListener('wheel', this.horizontalScrollHandler, { passive: false });
      } else {
        this.horizontalScrollContainer.scrollLeft = newScrollLeft;
      }

      // Update last scroll left position
      this.lastScrollLeft = newScrollLeft;
    }
  }
}
