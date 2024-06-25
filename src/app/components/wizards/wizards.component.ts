import { NgFor, isPlatformBrowser } from "@angular/common";
import {
  Component,
  ElementRef,
  ViewChild,
  HostListener,
  Inject,
  PLATFORM_ID,
  afterNextRender,
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
      id: 6,
      name: "Tamuna Rostiashvili",
      position: "CEO",
      image:
        "https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-462118.jpg&fm=jpg",
    },
  ];
  currentIndex = 0;
  slidesToShow = 3; // Number of slides to show at once
  slideWidth!: number;
  maxIndex!: number;
  autoSlideInterval = 2500; // Interval in milliseconds
  autoSlideTimer: any;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {}
  ngAfterViewInit(): void {
    afterNextRender(() => {
      if (isPlatformBrowser(PLATFORM_ID)) {
        this.calculateSlideWidth();
        this.calculateMaxIndex();
        this.showSlides();
        setInterval(() => {
          this.next();
        }, this.autoSlideInterval);
      }
    });
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: Event): void {
    console.log("test");
    if (isPlatformBrowser(PLATFORM_ID)) {
      this.calculateSlideWidth();
      this.calculateMaxIndex();
    }
  }

  calculateSlideWidth(): void {
    afterNextRender(() => {
      const containerWidth = this.carousel.nativeElement.clientWidth;
      this.slideWidth = containerWidth / this.images.length;
    });
  }

  calculateMaxIndex(): void {
    afterNextRender(() => {
      this.maxIndex = this.images.length - 1;
    });
  }

  next(): void {
    console.log(this.currentIndex, this.maxIndex);
    afterNextRender(() => {
      if (this.currentIndex <= this.maxIndex) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
      this.showSlides();
    });
  }

  prev(): void {
    afterNextRender(() => {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.maxIndex;
      }
      this.showSlides();
    });
  }

  showSlides(): void {
    afterNextRender(() => {
      if (isPlatformBrowser(PLATFORM_ID)) {
        const slidePosition = -this.currentIndex * this.slideWidth;
        this.carousel.nativeElement.style.transition = "transform 0.5s linear";
        this.carousel.nativeElement.style.transform = `translateX(${slidePosition}px)`;
      }
    });
  }

  // getTransformValue(): string {
  //   const styles = window.getComputedStyle(this.carousel.nativeElement);
  //   const transformString = styles.getPropertyValue("transform");
  //   // Extract translateX and translateY values from transform matrix
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
