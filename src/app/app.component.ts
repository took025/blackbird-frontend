import { NgClass, NgFor, NgIf, isPlatformBrowser } from "@angular/common";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  HostListener,
  Inject,
  ModuleWithProviders,
  PLATFORM_ID,
  Renderer2,
  signal,
} from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { StickyComponentComponent } from "./components/home-page/sticky-component/sticky-component.component";
import { WizardsComponent } from "./components/home-page/wizards/wizards.component";
import { InViewDirective } from "./components/directives/scroll-directive";
import { HeaderShrinkDirective } from "./components/directives/shrink-directive";
import { InViewService } from "./main-service";
import { ProjectsComponent } from "./components/home-page/projects/projects.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/home-page/header/header.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    FooterComponent,
    HeaderComponent,
    NgIf,
    // StickyComponentComponent,
    // NgFor,
    // NgIf,
    // WizardsComponent,
    // InViewDirective,
    // HeaderShrinkDirective,
    // ProjectsComponent,
    // FooterComponent,
    // NgClass,
    // HeaderComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  scrollEvent: Event | null = null;
  isBrowser: boolean = false;
  scrollTopSignal = signal(0);
  scrollPercentage: number = 0;

  // items: { id: number; text: string }[] = [
  //   {
  //     id: 1,
  //     text: "Gorenje",
  //   },
  //   {
  //     id: 1,
  //     text: "Gorenje",
  //   },
  //   {
  //     id: 1,
  //     text: "Samsung",
  //   },
  //   {
  //     id: 1,
  //     text: "Gorenje",
  //   },
  // {
  //   id: 1,
  //   text: "Gorenje",
  // },
  // {
  //   id: 1,
  //   text: "Gorenje",
  // },
  // ];


  constructor(
    private renderer: Renderer2, private el: ElementRef,
    @Inject(PLATFORM_ID) platformId: Object,
    private service: InViewService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.onWindowScroll()
  }

  ngAfterViewInit(): void {

    console.log('loaded');
    
  }


  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    if (this.isBrowser) {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      this.scrollPercentage = (winScroll / height) * 100;
    }
  }

  gotoTop() {
    if (this.isBrowser) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }
}
