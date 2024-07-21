import { Directive, ElementRef, HostListener, Renderer2, Input, Inject, PLATFORM_ID, OnInit, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
    standalone: true,
    selector: '[appCollapseOnScroll]'
})
export class CollapseOnScrollDirective implements OnInit, AfterViewInit {
    @Input() collapseHeight: string = '100px';
    @Input() expandedHeight: string = '100vh';
    @Input() collapseClass: string = 'collapsed';
    @Input() expandedClass: string = 'expanded';

    private isBrowser: boolean;
    private lastScrollTop: number = 0;
    private elementOffsets: number[] = [];
    private elements!: HTMLElement[];

    constructor(
        private el: ElementRef,
        private renderer: Renderer2,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {
        this.isBrowser = isPlatformBrowser(this.platformId);
    }

    ngOnInit() {
        if (this.isBrowser) {
            this.setExpandedHeight();
        }
    }

    ngAfterViewInit() {
        if (this.isBrowser) {
            this.calculateElementOffsets();
        }
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        if (this.isBrowser) {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            console.log('Scroll Top:', scrollTop);
            this.elementOffsets.forEach((offset, index) => {
                console.log(`Element ${index} offset: ${offset}`);
                if (scrollTop > this.lastScrollTop && scrollTop >= offset) {
                    this.collapseElement(index);
                } else if (scrollTop < this.lastScrollTop && scrollTop < offset) {
                    this.expandElement(index);
                }
            });
            this.lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
        }
    }

    private calculateElementOffsets() {
        const elements = this.el.nativeElement.querySelectorAll('[appCollapseOnScrollItem]');
        this.elements = Array.from(elements) as HTMLElement[];
        this.elementOffsets = this.elements.map(element => {
            const offset = element.getBoundingClientRect().top + window.scrollY;
            console.log(`Element offset: ${offset}`);
            return offset;
        });
    }

    private collapseElement(index: number) {
        if (this.elements[index]) {
            console.log(`Collapsing element ${index}`);
            this.renderer.setStyle(this.elements[index], 'height', this.collapseHeight);
            this.renderer.removeClass(this.elements[index], this.expandedClass);
            this.renderer.addClass(this.elements[index], this.collapseClass);
        }
    }

    private expandElement(index: number) {
        if (this.elements[index]) {
            console.log(`Expanding element ${index}`);
            this.renderer.setStyle(this.elements[index], 'height', this.expandedHeight);
            this.renderer.removeClass(this.elements[index], this.collapseClass);
            this.renderer.addClass(this.elements[index], this.expandedClass);
        }
    }

    private setExpandedHeight() {
        const elements = this.el.nativeElement.querySelectorAll('[appCollapseOnScrollItem]');
        elements.forEach((element: any) => {
            this.renderer.setStyle(element, 'height', this.expandedHeight);
            this.renderer.addClass(element, this.expandedClass);
        });
    }
}
