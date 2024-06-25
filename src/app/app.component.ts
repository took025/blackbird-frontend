import { NgFor, isPlatformBrowser } from "@angular/common";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  HostListener,
  Inject,
  PLATFORM_ID,
  afterNextRender,
} from "@angular/core";
import { RouterLink, RouterOutlet } from "@angular/router";
import { StickyComponentComponent } from "./components/sticky-component/sticky-component.component";
import { WizardsComponent } from "./components/wizards/wizards.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    StickyComponentComponent,
    NgFor,
    WizardsComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  scrollEvent: Event | null = null;
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

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    // old
    // if (isPlatformBrowser(platformId)) {
    //   console.log('id' , platformId);
    // }
    // new
    // afterNextRender(() => {
    // })
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event: Event) {
    afterNextRender(() => {
      // Emit scroll event globally
      window.dispatchEvent(new CustomEvent("customScroll", { detail: event }));
    });
  }
}
