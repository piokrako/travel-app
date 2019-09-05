import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Travel } from "../travel";
@Component({
  selector: "app-travel-list",
  templateUrl: "./travel-list.component.html",
  styleUrls: ["./travel-list.component.scss"]
})
export class TravelListComponent {
  @Input()
  travels: Travel[];

  @Output()
  update: EventEmitter<Travel> = new EventEmitter();

  @Output()
  remove: EventEmitter<Travel> = new EventEmitter();

  constructor() {}

  onUpdateTravel(travel: Travel) {
    this.update.emit(travel);
  }

  onRemoveTravel(travel: Travel) {
    this.remove.emit(travel);
  }
}
