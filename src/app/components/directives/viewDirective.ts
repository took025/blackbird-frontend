import {
  Directive,
  ElementRef,
  Renderer2,
  Input,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
} from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { InViewService } from "../../main-service";

@Directive({
  selector: "[appInViewSticky]",
  standalone: true,
})
export class InViewStickyDirective implements OnInit, OnDestroy {
  private observer?: IntersectionObserver;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private inViewService: InViewService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && entry.intersectionRatio === 1) {
            const dataIndex = this.el.nativeElement.getAttribute("data-index");
            if (dataIndex !== null) {
              this.inViewService.addElementIndex(dataIndex);
            }
          } else {
            const dataIndex = this.el.nativeElement.getAttribute("data-index");
            if (dataIndex !== null) {
              this.inViewService.removeElementIndex(dataIndex);
            }
          }
        },
        { threshold: 1 }
      );

      this.observer.observe(this.el.nativeElement);
    }
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
