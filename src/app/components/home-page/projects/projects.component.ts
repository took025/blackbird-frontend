import { Component } from "@angular/core";
import { InViewDirective } from "../../directives/scroll-directive";
import { NgClass } from "@angular/common";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [InViewDirective , NgClass , RouterLink],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.scss",
})
export class ProjectsComponent {
  isInview: boolean = false
  onInView(inView: boolean): void {
    setTimeout(() => {
      this.isInview = true;
    }, 4000);
    console.log('Element is in view:', inView);
    // You can add your custom logic here
  }
}
