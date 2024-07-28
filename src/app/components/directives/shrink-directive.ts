import { Directive, ElementRef, Renderer2, Input, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  standalone: true,
  selector: '[appInViewNew]'
})
export class InViewNewDirective implements OnInit {
  @Input() inViewClass!: string; // Class to add when the element is in view
  @Input('appTrackScroll') elementTop?: number;

  private isBrowser: boolean;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.checkInView(); // Initial check in case the element is already in view
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isBrowser) {
      this.checkInView();
    }
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    if (this.isBrowser) {
      this.checkInView();
    }
  }

  private checkInView() {
    // const rect = this.el.nativeElement.getBoundingClientRect();
    // const inView = (
    //   rect.top >= 0 &&
    //   rect.left >= 0 &&
    //   rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    //   rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    // );
    const rect = this.el.nativeElement.getBoundingClientRect();
    const distanceFromTop = rect.top;
    // console.log();

    console.log(distanceFromTop <= Number(this.elementTop));


    if (0) {
      this.renderer.addClass(this.el.nativeElement, this.inViewClass);
    } else {
      this.renderer.removeClass(this.el.nativeElement, this.inViewClass);
    }
  }
}
