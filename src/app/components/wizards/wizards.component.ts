import {
  CommonModule,
  JsonPipe,
  NgFor,
  NgIf,
  isPlatformBrowser,
} from "@angular/common";
import {
  Component,
  ElementRef,
  ViewChild,
  HostListener,
  Inject,
  PLATFORM_ID,
} from "@angular/core";
import { CarouselModule, OwlOptions } from "ngx-owl-carousel-o";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@Component({
  selector: "app-wizards",
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    CarouselModule,
    JsonPipe,
    // CommonModule,
    // NoopAnimationsModule,
    // BrowserAnimationsModule,
  ],
  templateUrl: "./wizards.component.html",
  styleUrl: "./wizards.component.scss",
  animations: [],
})
export class WizardsComponent {
  @ViewChild("carousel") carousel!: ElementRef<HTMLDivElement>;

  images = [
    {
      id: "0",
      name: "Tamuna Rostiashvili",
      position: "CEO",
      image:
        "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-462118.jpg&fm=jpg",
    },
    {
      id: "1",
      name: "Tamuna Rostiashvili",
      position: "CEO",
      image:
        "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-462118.jpg&fm=jpg",
    },
    {
      id: "2",
      name: "Tamuna Rostiashvili",
      position: "CEO",
      image:
        "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-462118.jpg&fm=jpg",
    },
    {
      id: "3",
      name: "Tamuna Rostiashvili",
      position: "CEO",
      image:
        "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-462118.jpg&fm=jpg",
    },
    {
      id: "4",
      name: "Tamuna Rostiashvili",
      position: "CEO",
      image:
        "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-462118.jpg&fm=jpg",
    },
    {
      id: "5",
      name: "Tamuna Rostiashvili",
      position: "CEO",
      image:
        "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-462118.jpg&fm=jpg",
    },
    {
      id: "6",
      name: "Tamuna Rostiashvili",
      position: "CEO",
      image:
        "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-462118.jpg&fm=jpg",
    },
    {
      id: "7",
      name: "Tamuna Rostiashvili",
      position: "CEO",
      image:
        "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-462118.jpg&fm=jpg",
    },
  ];
  isBrowser: boolean = false;
  currentIndex = 0;
  componentView: boolean = false;

  // slidesToShow = 3; // Number of slides to show at once
  // slideWidth!: number;
  // maxIndex!: number;
  // autoSlideInterval = 2500; // Interval in milliseconds
  // autoSlideTimer: any;
  // isReversing: boolean = false;

  // customOptions: OwlOptions = {
  //   loop: true,
  //   autoplay: false,
  //   autoplayTimeout: 3000,
  //   touchDrag: false,
  //   pullDrag: false,
  //   mouseDrag: false,
  //   autoplayHoverPause: true,
  //   dots: false,
  //   nav: true,
  //   navText: [
  //     '<span class="custom-nav custom-prev"> <img src="../../../assets/img/prev.svg" alt=""></span>',
  //     '<span class="custom-nav custom-next"><img src="../../../assets/img/next.svg" alt=""></span>',
  //   ],
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     550: {
  //       items: 2,
  //     },
  //     800: {
  //       items: 3,
  //     },
  //   },
  // };
  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  ngAfterViewInit(): void {

    if (this.isBrowser) {
      // this.next()
      // this.calculateSlideWidth()
      setTimeout(() => {
        this.componentView = true;
      }, 100);

      // this.calculateSlideWidth();
      // this.calculateMaxIndex();
      // this.showSlides();
      // setInterval(() => { }, this.autoSlideInterval);
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: Event): void {
    if (this.isBrowser) {
      // this.calculateSlideWidth();
      // this.calculateMaxIndex();
    }
  }

  // calculateSlideWidth(): void {
  //   if (this.isBrowser) {
  //     const containerWidth = this.carousel.nativeElement.clientWidth;
  //     this.slideWidth = containerWidth / this.slidesToShow;
  //   }
  // }

  // calculateMaxIndex(): void {
  //   if (this.isBrowser) {
  //     this.maxIndex = this.images.length - 3;
  //   }
  // }

  // next(isClicking?: boolean): void {
  //   if (this.isBrowser) {
  //     this.currentIndex++;
  //     this.showSlides();
  //   }
  // }

  // prev(isClicking?: boolean): void {
  //   if (this.isBrowser) {
  //     this.currentIndex--;
  //     this.showSlides(isClicking);
  //   }
  // }

  // showSlides(isClicking?: boolean): void {
  //   if (this.isBrowser) {
  //     let slidePosition = 0;
  //     const oneElementWidth =
  //       this.carousel.nativeElement.clientWidth / this.slidesToShow;
  //     slidePosition = -this.currentIndex * oneElementWidth;
  //     this.carousel.nativeElement.style.transition = "transform 5s linear";
  //     this.carousel.nativeElement.style.transform = `translateX(${slidePosition}px)`;
  //   }
  // }

  // getTransformValue(): string {
  //   const styles = window.getComputedStyle(this.carousel.nativeElement);
  //   const transformString = styles.getPropertyValue("transform");
  //   const matrix = transformString.match(/^matrix\((.+)\)$/);
  //   if (matrix) {
  //     const matrixValues = matrix[1].split(", ");
  //     const translateX = parseFloat(matrixValues[4]);
  //     const translateY = parseFloat(matrixValues[5]);
  //     return `${translateX}`;
  //   } else {
  //     return "No transform or unsupported transform format";
  //   }
  // }
}
