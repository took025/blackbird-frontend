import {
  Component,
  AfterViewInit,
  OnDestroy,
  QueryList,
  ViewChildren,
  ElementRef,
  Inject,
  PLATFORM_ID,
} from "@angular/core";

import { NgClass, NgFor, isPlatformBrowser } from "@angular/common";
@Component({
  selector: "app-sticky-component",
  standalone: true,
  imports: [NgClass, NgFor],
  templateUrl: "./sticky-component.component.html",
  styleUrl: "./sticky-component.component.scss",
})
export class StickyComponentComponent {
  @ViewChildren("stickyElement", { read: ElementRef })
  stickyElements!: QueryList<ElementRef>;

  items = Array.from({ length: 5 }, (_, i) => `Item ${i + 1}`);
  private scrollListener!: () => void;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.scrollListener = this.onScroll.bind(this);
      window.addEventListener("scroll", this.scrollListener);
      this.onScroll(); // Initial check
    }
  }

  onScroll(): void {
    this.stickyElements.forEach((stickyElement, index) => {
      const element = stickyElement.nativeElement;
      const rect = element.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom >= 0) {
        console.log(`Element at the top: ${element.id}`);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.scrollListener) {
      window.removeEventListener("scroll", this.scrollListener);
    }
  }
}
