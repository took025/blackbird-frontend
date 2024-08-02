import { isPlatformBrowser, NgClass, NgFor, NgIf } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  Inject,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { debounceTime, Subject } from 'rxjs';
import { WindowService } from '../../../core/services/events.service';
import { serviceRoutes, servicesData } from '../../services/services.array';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, RouterModule, NgFor, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public services = servicesData;

  @ViewChild('resizableDiv') resizableDiv!: ElementRef;
  @ViewChild('staticdiv') staticDiv!: ElementRef;

  isBrowser: boolean = false;
  scrollTop: boolean = false;
  loaded: boolean = false;
  activeHoverItem: string = 'Home';
  currentRoute = this.router.url.split('/').pop();
  contentItems = [{}, {}, {}, {}, {}];

  private previousScrollTop = 0;
  public hdieHeader = false;
  public fastScrolling = false;
  public navMenu: boolean = false;

  private scrollEvent$ = new Subject<void>();
  constructor(
    @Inject(PLATFORM_ID) platformId: Object,
    private eventService: WindowService,
    private router: Router
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    this.scrollEvent$
      .pipe(
        debounceTime(100) // Adjust the debounce time as needed
      )
      .subscribe(() => {
        this.checkScrollPosition();
      });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.updateHeight();
  }

  // ngOnInit(): void {
  //   this.eventService.resize$.subscribe(event => {
  //     console.log('Window resized', event);
  //   })
  //   this.eventService.scroll$.subscribe(event => {
  //     this.updateHeight()

  //   })
  // }

  toggleNav() {
    this.navMenu = !this.navMenu;
  }

  activeHover(item: string) {
    this.activeHoverItem = item;
  }

  checkScrollPosition() {
    if (this.isBrowser) {
      if (window.scrollY > 0) {
        this.scrollTop = true;
      } else {
        this.scrollTop = false;
      }
    }
  }

  updateHeight() {
    if (this.isBrowser) {
      this.currentRoute = this.router.url.split('/').pop();

      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > this.previousScrollTop && scrollTop > 150) {
        this.hdieHeader = true;
      } else if (scrollTop < this.previousScrollTop) {
        this.hdieHeader = false;
      }
      // console.log(this.router.url.split('/').pop());
      console.log(this.currentRoute);

      if (this.currentRoute === 'home') {
        this.scrollTop = scrollTop > 0;
      } else {
        this.scrollTop = true;
      }
      this.previousScrollTop = scrollTop;

      // this.scrollTop = true;
      // if (scrollTop > 0) {
      //   this.scrollTop = true;
      // } else {
      //   this.scrollTop = false
      // }
    }
  }

  ngAfterContentInit(): void {
    setTimeout(() => {
      // this.checkScrollPosition()
      this.updateHeight();
      this.loaded = true;
    }, 2000);
  }
}
