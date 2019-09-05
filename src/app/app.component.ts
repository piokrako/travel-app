import { Component } from "@angular/core";
import { Travel } from "./travel";
import { TravelDataService } from "./travel-data.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [TravelDataService]
})
export class AppComponent {
  title = "Travel journal";

  constructor(private travelDataService: TravelDataService) {}

  onRemoveTravel(travel: Travel) {
    this.travelDataService.deleteTravelById(travel.id);
  }

  onUpdateTravel(travel: Travel) {
    this.travelDataService.updateTravelById(travel.id);
  }

  get travels() {
    return this.travelDataService.getAllTravels();
  }
}
