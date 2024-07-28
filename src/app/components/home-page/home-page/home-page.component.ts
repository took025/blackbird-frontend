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
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { ProjectsComponent } from "../projects/projects.component";
import { InViewDirective } from "../../directives/scroll-directive";
import { WizardsComponent } from "../wizards/wizards.component";
import { StickyComponentComponent } from "../sticky-component/sticky-component.component";
import { InViewService } from "../../../main-service";
import { LogosComponent } from "../../logos/logos.component";
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    StickyComponentComponent,
    NgFor,
    NgIf,
    WizardsComponent,
    InViewDirective,
    ProjectsComponent,
    FooterComponent,
    NgClass,
    HeaderComponent,
    LogosComponent,
  ],
  // exportAs: 'HomePageComponent',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  scrollEvent: Event | null = null;
  isBrowser: boolean = false;
  scrollTopSignal = signal(0);
  scrollPercentage: number = 0;

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
    private renderer: Renderer2, private el: ElementRef,
    @Inject(PLATFORM_ID) platformId: Object,
    private service: InViewService
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.onWindowScroll()
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
