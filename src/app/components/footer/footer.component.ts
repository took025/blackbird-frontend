import { NgClass, NgStyle, isPlatformBrowser } from "@angular/common";
import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [NgStyle, NgClass],
  templateUrl: "./footer.component.html",
  styleUrl: "./footer.component.scss",
})
export class FooterComponent {
  @ViewChild('scrollButton') scrollButton!: ElementRef<HTMLButtonElement>;

  currentYear: number = new Date().getFullYear();
  backgroundSize: string = "200px";
  isBrowser: boolean = false;
  ngOnInit() { }
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

      // const scrollTopPro = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      // const documentHeightPro = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      // const scrollPercentagePro = (scrollTopPro / documentHeightPro) * 100;
      // this.updateBorder(scrollPercentagePro);


      const footerPosition = this.el.nativeElement.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (footerPosition <= windowHeight && footerPosition >= 0) {
        const scrollTop = window.scrollY;
        const footerHeight = this.el.nativeElement.offsetHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const footerScrollPercentage =
          (scrollTop + windowHeight - documentHeight + footerHeight) /
          footerHeight;
        const calculateSize = 180 + footerScrollPercentage * 300 + "px"
        if (Number(calculateSize.slice(0, -2)) > 180) {
          this.backgroundSize = 180 + footerScrollPercentage * 300 + "px";
        }
      } else {
        this.backgroundSize = "400px";
      }
    }
  }



  // updateBorder(scrollPercentage: number) {
  //   if (this.isBrowser) {

  //     const borderThickness = (scrollPercentage / 100) * 20; // Adjust the 20 to control max border thickness
  //     const borderColor = `rgba(0, 0, 255, ${scrollPercentage / 100})`; // Adjust color as needed

  //     this.scrollButton.nativeElement.style.border = `${borderThickness}px solid ${borderColor}`;
  //   }
  // }
}
