import { NgClass, NgFor, isPlatformBrowser } from "@angular/common";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  HostListener,
  Inject,
  PLATFORM_ID,
  signal,
} from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { StickyComponentComponent } from "./components/sticky-component/sticky-component.component";
import { WizardsComponent } from "./components/wizards/wizards.component";
import { InViewDirective } from "./components/directives/scroll-directive";
import { HeaderShrinkDirective } from "./components/directives/shrink-directive";
import { InViewService } from "./main-service";
import { ProjectsComponent } from "./components/projects/projects.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    StickyComponentComponent,
    NgFor,
    WizardsComponent,
    InViewDirective,
    HeaderShrinkDirective,
    ProjectsComponent,
    FooterComponent,
    NgClass,
    HeaderComponent
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  scrollEvent: Event | null = null;
  isBrowser: boolean = false;
  scrollTopSignal = signal(0);
  items: { id: number; text: string }[] = [
    {
      id: 1,
      text: "Gorenje",
    },
    {
      id: 1,
      text: "Gorenje",
    },
    {
      id: 1,
      text: "Samsung",
    },
    {
      id: 1,
      text: "Gorenje",
    },
    // {
    //   id: 1,
    //   text: "Gorenje",
    // },
    // {
    //   id: 1,
    //   text: "Gorenje",
    // },
  ];
  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private service: InViewService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }


  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event: Event) {
    if (this.isBrowser) {
      // const scrollTop =
      //   window.pageYOffset ||
      //   document.documentElement.scrollTop ||
      //   document.body.scrollTop ||
      //   0;
      this.scrollTopSignal.set(
        window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop ||
          0
      );
      // console.log(scrollTop);

      // Emit scroll event globally
      // window.dispatchEvent(new CustomEvent("customScroll", { detail: event }));
    }
  }

  scrollToTop(): void {
    if (this.isBrowser) {
      // window.scrollTo(0, 0);

      // const scroller = document.getElementById("header") as HTMLInputElement;
      // scroller.scrollTo({
      //   top: 0,
      //   behavior: "smooth",
      // });
      const ddd = document.getElementById("header") as HTMLElement;
      ddd.scrollIntoView({
        behavior: "smooth",
      });
    }
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: Event): void {
    if (this.isBrowser) {
      console.log(this.service.elementIndices());
    }
  }
}
