import { Injectable, signal } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class InViewService {
  public elementIndices = signal<string[]>([]);

  constructor() {}

  addElementIndex(index: string) {
    this.elementIndices.update((indexes) => [...indexes, index]);
    // console.log(this.elementIndices());
  }

  removeElementIndex(index: string) {
    this.elementIndices.update((indexes) =>
      indexes.filter((indexs) => indexs !== index)
    );
    // console.log(this.elementIndices());
  }
  
  getStickyElementIndices() {
    return this.elementIndices;
  }
}
