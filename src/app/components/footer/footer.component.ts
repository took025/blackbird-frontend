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

      // Check if the footer is in the viewport
      if (footerPosition <= windowHeight && footerPosition >= 0) {
        // Calculate the scroll percentage within the footer
        const scrollTop = window.scrollY;
        const footerHeight = this.el.nativeElement.offsetHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const footerScrollPercentage =
          (scrollTop + windowHeight - documentHeight + footerHeight) /
          footerHeight;

        // Adjust the background size based on the scroll percentage
        this.backgroundSize = 200 + footerScrollPercentage * 600 + "px";
        // console.log(this.backgroundSize);
      } else {
        // Reset the background size when the footer is not in view
        this.backgroundSize = "811";
      }
    }
  }
}
