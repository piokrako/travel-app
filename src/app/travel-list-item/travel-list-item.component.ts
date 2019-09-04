import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Travel } from "../travel";

@Component({
  selector: "app-travel-list-item",
  templateUrl: "./travel-list-item.component.html",
  styleUrls: ["./travel-list-item.component.scss"]
})
export class TravelListItemComponent {
  @Input() travel: Travel[];

  @Output() remove: EventEmitter<Travel> = new EventEmitter();

  constructor() {}

  removeTravel(travel: Travel) {
    this.remove.emit(travel);
  }
}
