import { NgClass, NgStyle, isPlatformBrowser } from "@angular/common";
import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
  Renderer2,
} from "@angular/core";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.scss",
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  backgroundSize: string = "100%";
  isBrowser: boolean = false;
  ngOnInit() {}
  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private el: ElementRef,
    private renderer: Renderer2
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (this.isBrowser) {
      const footerPosition = this.el.nativeElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (footerPosition <= windowHeight && footerPosition >= 0) {
        const scrollTop = window.scrollY;
        const footerHeight = this.el.nativeElement.offsetHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const footerScrollPercentage =
          (scrollTop + windowHeight - documentHeight + footerHeight) /
          footerHeight;
        this.backgroundSize = 180 + footerScrollPercentage * 300 + "px";
      } else {
        this.backgroundSize = "400px";
      }
    }
  }
}
