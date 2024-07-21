import {
  Component,
  AfterViewInit,
  OnDestroy,
  QueryList,
  ViewChildren,
  ElementRef,
  Inject,
  PLATFORM_ID,
  signal,
  HostListener,
  effect,
  computed,
} from "@angular/core";

import { NgClass, NgFor, isPlatformBrowser } from "@angular/common";
import { InViewStickyDirective } from "../../directives/viewDirective";
import { InViewService } from "../../../main-service";
@Component({
  selector: "app-sticky-component",
  standalone: true,
  imports: [NgClass, NgFor, InViewStickyDirective],
  templateUrl: "./sticky-component.component.html",
  styleUrl: "./sticky-component.component.scss",
})
export class StickyComponentComponent {
  @ViewChildren("stickyElement", { read: ElementRef })
  stickyElements!: QueryList<ElementRef>;
  // activeSlide = 0;
  sliderItems = Array.from({ length: 5 }, (_, i) => Number(`${i + 1}`));
  items = Array.from({ length: 5 }, (_, i) => `Item ${i + 1}`);
  private scrollListener!: () => void;
  // activeSignal = signal("");
  lengthSignal = computed(() => this.service.elementIndices().length);

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    public service: InViewService
  ) {
    effect(() => {
      // console.log("this changed " + this.todoService.filterSig());
      // console.log(
      //   `The isActive signal changed value to ${this.visibleTodos()}`
      // );
      // const elLength = this.service.elementIndices().length;
      // if (elLength) {
      //   this.activeSignal.set("1");
      // } else if (elLength) {
      //   this.activeSignal.set("2");
      // } else if (elLength) {
      //   this.activeSignal.set("3");
      // } else if (elLength) {
      //   this.activeSignal.set("4");
      // } else {
      //   // this.activeSignal.set(0);
      // }
      // console.log(this.service.elementIndices().length);
      // console.log(this.activeSignal());
      // console.log(this.service.elementIndices());
    });
  }

  // ngAfterViewInit(): void {
  //   // const indexData = this.service.getStickyElementIndices();
  //   // this.stickyElements.changes.subscribe((elements) => {
  //   //   console.log(elements);
  //   // });
  // }

  // getSDSD() {
  //   if (isPlatformBrowser(this.platformId)) {
  //     // this.scrollListener = this.onScroll.bind(this);
  //     // window.addEventListener("scroll", this.scrollListener);
  //     // this.onScroll(); // Initial check
  //   }
  // }
  // onScroll(): void {
  //   this.stickyElements.forEach((stickyElement, index) => {
  //     const element = stickyElement.nativeElement;
  //     const rect = element.getBoundingClientRect();
  //     if (rect.top <= 0 && rect.bottom >= 0) {
  //       console.log(`Element at the top: ${element.id}`);
  //     }
  //   });
  // }

  ngOnDestroy(): void {
    if (this.scrollListener) {
      window.removeEventListener("scroll", this.scrollListener);
    }
  }
}
