import { Directive, ElementRef, Renderer2, HostListener } from "@angular/core";

@Directive({
  selector: "[appHeaderShrink]",
  standalone: true,
})
export class HeaderShrinkDirective {
  private lastScrollTop = 0;
  private initialHeight = "100vh";
  private shrinkHeight = "121px";

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    // if (scrollTop > this.lastScrollTop) {
    // Scroll Down
    setTimeout(() => {
      this.renderer.setStyle(
        this.el.nativeElement,
        "height",
        this.shrinkHeight
      );
    }, 1000);
    this.lastScrollTop = scrollTop;
  }
}
