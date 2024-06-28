import { NgFor, isPlatformBrowser } from "@angular/common";
import {
  Component,
  ElementRef,
  ViewChild,
  HostListener,
  Inject,
  PLATFORM_ID,
} from "@angular/core";

@Component({
  selector: "app-wizards",
  standalone: true,
  imports: [NgFor],
  templateUrl: "./wizards.component.html",
  styleUrl: "./wizards.component.scss",
})
export class WizardsComponent {
  @ViewChild("carousel") carousel!: ElementRef<HTMLDivElement>;

  images = [
    {
      id: 0,
      name: "Tamuna Rostiashvili",
      position: "CEO",
      image:
        "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-462118.jpg&fm=jpg",
    },
    {
      id: 1,
      name: "Tamuna Rostiashvili",
      position: "CEO",
      image:
        "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-462118.jpg&fm=jpg",
    },
    {
      id: 2,
      name: "Tamuna Rostiashvili",
      position: "CEO",
      image:
        "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-462118.jpg&fm=jpg",
    },
    {
      id: 3,
      name: "Tamuna Rostiashvili",
      position: "CEO",
      image:
        "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-462118.jpg&fm=jpg",
    },
    {
      id: 4,
      name: "Tamuna Rostiashvili",
      position: "CEO",
      image:
        "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-462118.jpg&fm=jpg",
    },
    {
      id: 5,
      name: "Tamuna Rostiashvili",
      position: "CEO",
      image:
        "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-462118.jpg&fm=jpg",
    },
    {
      id: 6,
      name: "Tamuna Rostiashvili",
      position: "CEO",
      image:
        "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-462118.jpg&fm=jpg",
    },
    {
      id: 7,
      name: "Tamuna Rostiashvili",
      position: "CEO",
      image:
        "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-462118.jpg&fm=jpg",
    },
  ];
  isBrowser: boolean = false;
  currentIndex = 0;
  slidesToShow = 3; // Number of slides to show at once
  slideWidth!: number;
  maxIndex!: number;
  autoSlideInterval = 2500; // Interval in milliseconds
  autoSlideTimer: any;
  isReversing: boolean = false;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }
  ngAfterViewInit(): void {
    if (this.isBrowser) {
      if (this.isBrowser) {
        this.calculateSlideWidth();
        this.calculateMaxIndex();
        this.showSlides();
        setInterval(() => {
          // this.next();
        }, this.autoSlideInterval);
      }
    }
    // const scroller = document.querySelector("#scroller");
    // const output = document.querySelector("#output");
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: Event): void {
    // console.log("test");
    if (this.isBrowser) {
      this.calculateSlideWidth();
      this.calculateMaxIndex();
    }
  }

  calculateSlideWidth(): void {
    if (this.isBrowser) {
      const containerWidth = this.carousel.nativeElement.clientWidth;
      // console.log(this.carousel.nativeElement);

      // this.slideWidth = window.innerWidth / this.images.length;
      this.slideWidth = containerWidth / this.slidesToShow;
    }
  }

  calculateMaxIndex(): void {
    if (this.isBrowser) {
      this.maxIndex = this.images.length - 3;
    }
  }

  next(isClicking?: boolean): void {
    if (this.isBrowser) {
      // if (isClicking) {
      //   this.currentIndex++;
      // }
      if (this.currentIndex < this.maxIndex && !this.isReversing) {
        this.currentIndex++;
      } else {
        if (!isClicking) {
          this.isReversing = true;
          // this.currentIndex = 0;
          this.prev();
          this.showSlides(true);
          // return;
        }
      }
      this.showSlides(isClicking);
    }
  }

  prev(isClicking?: boolean): void {
    if (this.isBrowser) {
      // if (isClicking) {
      //   this.currentIndex--;
      // }
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        if (!isClicking) {
          this.isReversing = false;
          this.next();
          // this.currentIndex = this.maxIndex;
        }
      }
      this.showSlides(isClicking);
    }
  }

  showSlides(isClicking?: boolean): void {
    if (this.isBrowser) {
      let slidePosition = 0;
      const oneElementWidth =
        this.carousel.nativeElement.clientWidth / this.slidesToShow;
      // if (reverse) {
      //   slidePosition = -this.currentIndex * (oneElementWidth - 6);
      // } else {
      slidePosition = -this.currentIndex * oneElementWidth;
      // }
      // this.carousel.nativeElement.style.transition = "transform 6s linear";
      this.carousel.nativeElement.style.transition = "transform 0.5s linear";
      this.carousel.nativeElement.style.transform = `translateX(${slidePosition}px)`;
    }
  }

  getTransformValue(): string {
    const styles = window.getComputedStyle(this.carousel.nativeElement);
    const transformString = styles.getPropertyValue("transform");
    // Extract translateX and translateY values from transform matrix
    const matrix = transformString.match(/^matrix\((.+)\)$/);
    if (matrix) {
      const matrixValues = matrix[1].split(", ");
      const translateX = parseFloat(matrixValues[4]);
      const translateY = parseFloat(matrixValues[5]);
      return `${translateX}`;
    } else {
      return "No transform or unsupported transform format";
    }
  }
}
