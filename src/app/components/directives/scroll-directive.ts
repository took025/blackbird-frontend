import {
  Directive,
  ElementRef,
  Renderer2,
  Inject,
  PLATFORM_ID,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Directive({
  selector: "[appInView]",
  standalone: true,
})
export class InViewDirective implements OnInit, OnDestroy {
  private observer!: IntersectionObserver;
  private readonly inViewClass = "in-view";
  private isBrowser: boolean;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setTimeout(() => {
                this.renderer.addClass(
                  this.element.nativeElement,
                  this.inViewClass
                );
              }, 500);
            }
            //  else {
            //   this.renderer.removeClass(
            //     this.element.nativeElement,
            //     this.inViewClass
            //   );
            // }
          });
        },
        { threshold: 0.1 }
      );

      this.observer.observe(this.element.nativeElement);
    }
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      this.observer.disconnect();
    }
  }
}
