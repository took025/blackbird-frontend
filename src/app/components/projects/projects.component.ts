import { Component } from "@angular/core";
import { InViewDirective } from "../directives/scroll-directive";

@Component({
  selector: "app-projects",
  standalone: true,
  imports: [InViewDirective],
  templateUrl: "./projects.component.html",
  styleUrl: "./projects.component.scss",
})
export class ProjectsComponent {}
