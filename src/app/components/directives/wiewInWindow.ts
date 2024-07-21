import { Directive, ElementRef, HostListener, Input, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
    standalone: true,
    selector: '[appTrackScroll]'
})
export class TrackScrollDirective {
    @Input('appTrackScroll') elementTop?: number;
    @Input('appTrackScrollBottom') elementBottom?: number;
    @Input() collapseClass = 'compress';
    @Input() showElementClass = 'show-element';

    private isBrowser: boolean;

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {
        this.isBrowser = isPlatformBrowser(this.platformId);
    }

    ngOnInit() {
        if (this.isBrowser) {
            if (this.elementTop) {
                this.trackScrollTop();
            }
            if (this.elementBottom) {
                this.trackScrollBottom();
            }
        }
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        if (this.isBrowser) {
            if (this.elementTop) {
                this.trackScrollTop();
            }
            if (this.elementBottom) {
                this.trackScrollBottom();
            }
        }
    }

    private trackScrollTop() {
        const rect = this.el.nativeElement.getBoundingClientRect();
        const distanceFromTop = rect.top;
        console.log(distanceFromTop , this.elementTop , 'top');
        
        if (this.elementTop !== undefined && distanceFromTop <= Number(this.elementTop)) {
            this.renderer.addClass(this.el.nativeElement, this.collapseClass);
        } else {
            this.renderer.removeClass(this.el.nativeElement, this.collapseClass);
        }
    }

    private trackScrollBottom() {
        const rect = this.el.nativeElement.getBoundingClientRect();
        const distanceFromBottom = window.innerHeight - rect.bottom;
        console.log(distanceFromBottom , Number(this.elementBottom) , 'bottom');

        if (this.elementBottom && distanceFromBottom >= Number(this.elementBottom)) {
            this.renderer.addClass(this.el.nativeElement, this.showElementClass);
        } 
        // else {
        //     this.renderer.removeClass(this.el.nativeElement, this.showElementClass);
        // }
    }
}
