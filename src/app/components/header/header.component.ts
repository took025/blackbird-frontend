import { isPlatformBrowser, NgClass } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('resizableDiv') resizableDiv!: ElementRef;
  @ViewChild('staticdiv') staticDiv!: ElementRef;


  isBrowser: boolean = false
  scrollTop: boolean = false;
  loaded: boolean = false;


  private previousScrollTop = 0;
  public hdieHeader = false;
  public fastScrolling = false;



  private scrollEvent$ = new Subject<void>();
  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.scrollEvent$.pipe(
      debounceTime(100) // Adjust the debounce time as needed
    ).subscribe(() => {
      this.checkScrollPosition();
    });
  }
  ngOnInit(): void {
    // this.scrollEvent$.next();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.updateHeight()
  }


  checkScrollPosition() {
    if (this.isBrowser) {

      if (window.scrollY > 0) {
        this.scrollTop = true;
        // window.scrollY = 5;

      } else {
        this.scrollTop = false;
      }
      console.log(window.scrollY);

    }
  }

  updateHeight() {
    if (this.isBrowser) {

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      // if ((scrollTop > this.previousScrollTop) && (scrollTop > 100)) {
      //   this.hdieHeader = true;
      // } else if (scrollTop < this.previousScrollTop) {
      //   this.hdieHeader = false;
      // }
      const scrollSpeed = Math.abs(scrollTop - this.previousScrollTop) / 5;
      if (scrollTop > 100) {
        this.fastScrolling = scrollSpeed > 3; // Adjust the threshold as needed
      } else {
        this.fastScrolling = false
      }


      console.log(this.fastScrolling, scrollTop);


      // Update the scrollTop variable
      this.scrollTop = scrollTop > 0;

      // Update the previousScrollTop for the next call
      this.previousScrollTop = scrollTop;

      if (scrollTop > 0) {
        this.scrollTop = true;
      } else {
        this.scrollTop = false
      }
      // this.resizableDiv.nativeElement.style.height = `${newHeight}px`;
      // this.staticDiv.nativeElement.style.height = `${newHeight}px`;
    }
  }
  ngAfterContentInit(): void {
    setTimeout(() => {
      this.loaded = true;
    }, 2000);
  }
}
